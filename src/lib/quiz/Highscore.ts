import { browser } from "$app/environment";
import {writable} from "svelte/store";

export class Highscore extends Map<string, number> {

  save(): void {
    localStorage.setItem('highscore', this.serialize());
  }

  add(id: string, score: number): void {
    if(!this.has(id) || (this.get(id) ?? 0) < score) {
      this.set(id, score);
      highscore.update(hs => this);
    }
  }

  tryGet(id: string): number {
    if(!this.has(id))
      return 0;

    return this.get(id) ?? 0;
  }

  isHighscore(id: string, score: number): boolean {
    return this.tryGet(id) < score;
  }

  get total(): number {
    let t = 0;

    for(const [id, score] of this){
      t += score;
    }

    return t;
  }

  get level(): number {
    return 1 + Math.trunc(Math.sqrt(this.total) / 10);
  }

  get exp(): number {
    const levelUpPoints = this.pointsForNextLevel - this.pointsForCurrentLevel;
    return (levelUpPoints - this.pointsUntilNextLevel) / levelUpPoints;
    //return Math.sqrt(this.total) / 10 - this.level + 1;
  }

  get expPercent(): number {
    return Math.trunc(this.exp * 100);
  }

  get pointsForCurrentLevel(): number {
    return Highscore.pointsForLevel(this.level);
  }

  get pointsForNextLevel(): number {
    return Highscore.pointsForLevel(this.level + 1);
  }

  get pointsUntilNextLevel(): number {
    return this.pointsForNextLevel - this.total;
  }

  get pointsInCurrentLevel(): number {
    return this.pointsForNextLevel - this.pointsForCurrentLevel - this.pointsUntilNextLevel;
  }

  static pointsForLevel(level: number): number {
    return 100 * Math.pow(level - 1, 2) - 100;
  }

  private serialize(): string {
    const entries = [];

    for(const [id, score] of this){
      entries.push({id: id, score: score});
    }

    return JSON.stringify(entries);
  }


  static load(): Highscore|null {
    if(!browser)
      return null;

    const saved = localStorage.getItem('highscore');
    if(!saved)
      return null;

    return this.parse(saved);
  }

  private static parse(serialized: string): Highscore {
    const hs = new Highscore();
    const entries = JSON.parse(serialized);

    if(entries.constructor === Array){
      for(const { id, score } of entries){
        if(!id || !score)
          continue;

        hs.set(id, score);
      }
    }

    return hs;
  }
}

export const highscore = writable(Highscore.load() ?? new Highscore());

highscore.subscribe(hs => {
  hs.save();
});