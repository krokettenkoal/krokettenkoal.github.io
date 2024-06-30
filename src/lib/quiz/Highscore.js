import { browser } from "$app/environment";
import { writable } from "svelte/store";
export var Achievement;
(function (Achievement) {
    Achievement["PersonalBest"] = "Personal best";
    Achievement["LevelUp"] = "Level up";
})(Achievement || (Achievement = {}));
export class Highscore extends Map {
    save() {
        localStorage.setItem('highscore', this.serialize());
    }
    add(id, score) {
        if (!this.has(id) || (this.get(id) ?? 0) < score) {
            this.set(id, score);
            highscore.update(hs => this);
            return true;
        }
        return false;
    }
    tryGet(id) {
        if (!this.has(id))
            return 0;
        return this.get(id) ?? 0;
    }
    isHighscore(id, score) {
        return this.tryGet(id) < score;
    }
    get total() {
        let t = 0;
        for (const [id, score] of this) {
            t += score;
        }
        return t;
    }
    get level() {
        return Math.trunc(Math.sqrt(this.total / 100 + 1)) || 1;
    }
    get exp() {
        const levelUpPoints = this.pointsForNextLevel - this.pointsForCurrentLevel;
        return (levelUpPoints - this.pointsUntilNextLevel) / levelUpPoints;
    }
    get expPercent() {
        return Math.trunc(this.exp * 100);
    }
    get pointsForCurrentLevel() {
        return Highscore.pointsForLevel(this.level);
    }
    get pointsForNextLevel() {
        return Highscore.pointsForLevel(this.level + 1);
    }
    get pointsUntilNextLevel() {
        return this.pointsForNextLevel - this.total;
    }
    get pointsInCurrentLevel() {
        return this.pointsForNextLevel - this.pointsForCurrentLevel - this.pointsUntilNextLevel;
    }
    static pointsForLevel(level) {
        return 100 * Math.pow(level, 2) - 100;
    }
    serialize() {
        const entries = [];
        for (const [id, score] of this) {
            entries.push({ id: id, score: score });
        }
        return JSON.stringify(entries);
    }
    static load() {
        if (!browser)
            return null;
        const saved = localStorage.getItem('highscore');
        if (!saved)
            return null;
        return this.parse(saved);
    }
    static parse(serialized) {
        const hs = new Highscore();
        const entries = JSON.parse(serialized);
        if (entries.constructor === Array) {
            for (const { id, score } of entries) {
                if (!id || !score)
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
//# sourceMappingURL=Highscore.js.map