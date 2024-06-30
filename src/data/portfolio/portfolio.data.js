export default {
  "projects": [
    {
      "id": "finding-emo",
      "title": "Finding Emo",
      "description": "Finding Emo is an immersive VR experience where players step into a dark void and interact with seven glowing elements, each representing a different emotion. As players manipulate these elements, they create evolving soundscapes, shaping a unique auditory and visual journey.",
      "text": "## Summary\n" +
        "\n" +
        "**Finding Emo** invites players into a mysterious virtual reality world built with Unity and Wwise, where the boundaries between sound, emotion, and environment blur. This project was created during the Virtual Music Space workshop at the Creative Media Summer School at St. Pölten UAS by a dedicated team of 13 composers and audio engineers and 3 developers and software engineers, realized within just 5 days. \n" +
        "\n" +
        "The journey begins in a dark void, where players find themselves standing in shallow water. Before them, a strange energy fractures into seven glowing elements, each embodying a distinct emotion: anger, fear, joy, disgust, disdain, surprise, and grief.\n" +
        "\n" +
        "The experience starts with an enveloping room tone, but as players lift the glowing items from the water, each item reveals its own evocative soundtrack. The sounds become richer and more complex as the objects are rotated, introducing up to three additional layers of sound. Returning the objects to their initial state simplifies the sound to its base layer, and submerging them back into the water silences them entirely.\n" +
        "\n" +
        "In this ever-changing sonic landscape, players are free to place and arrange the emotional elements as they wish, crafting their own personal symphony. *Finding Emo is not a game;* it’s an exploration of emotion through sound and interaction, offering a deeply personal and reflective VR experience where every choice alters the auditory and visual tapestry around them.\n" +
        "\n" +
        "## Technical details\n" +
        "Finding Emo utilizes **Unity** with the **XR Interaction Toolkit**, incorporating hand tracking for enhanced interactivity. The audio environment is managed using **Wwise** as the audio middleware. Each emotional element continuously plays its soundtrack, which is low-passed and silenced when submerged underwater.\n" +
        "\n" +
        "The rotational movement of each element is tracked and linked to a Wwise RTPC, modulating the intensity of additional sound layers. Spatial audio is achieved using the **Reflect** and **Convolution Reverb** plugins, with rendering and binauralization handled by the **Meta XR Presence SDK**, ensuring a fully immersive auditory experience.\n" +
        "\n" +
        "## Credits\n" +
        "\n" +
        "### Audio\n" +
        "* Kaiser Gabriel - **Audio Lead**\n" +
        "* Askar Ali & Pfeiffer Lukas - **Disdain**\n" +
        "* Dzehverovic Alma - **Fear**\n" +
        "* Kaiser Gabriel & Artner Dominik - **Disgust**\n" +
        "* Mayer Konstantin - **Grief**\n" +
        "* Moisl Jakob & Brandstetter Mario - **Anger**\n" +
        "* Schönfeldinger Leonie & Morgenroth Daniel - **Surprise**\n" +
        "* Weber Désirée - **Joy**\n" +
        "\n" +
        "### Development & Implementation\n" +
        "* Heinzl Lukas & Steinmetz Martin - **Unity Development**\n" +
        "* Grill Cajetan - **Audio Development & Implementation**\n" +
        "* Pfeiffer Paul - **Wwise Implementation**\n" +
        "\n" +
        "### Supervisors\n" +
        "* Aichinger Thomas\n" +
        "* Schmellenkamp Oliver",
      "hasTheme": true,
      "background": "bg.webp",
      "links": [
        {
          "target": "https://youtu.be/5WWaod99K64",
          "label": "Watch on YouTube",
          "title": "Finding Emo on YouTube"
        },
        {
          "target": "https://creativemediasummer.fhstp.ac.at/workshops/virtual-music-space",
          "label": "Virtual Music Space Workshop",
          "title": "Workshop page on fhstp.ac.at"
        },
        {
          "target": "https://creativemediasummer.fhstp.ac.at/",
          "label": "Creative Media Summer School",
          "title": "Creative Media Summer School at St. Pölten UAS"
        }
      ],
      "media": [
        {
          "type": "video",
          "source": "/media/finding-emo/video/finding-emo-720p.webm",
          "caption": "Video: Full experience recording"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_00.webp",
          "caption": "Start screen"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_01.webp",
          "caption": "Enter the void"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_02.webp",
          "caption": "A strange energy in the distance"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_03.webp",
          "caption": "The energy starts floating around you"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_04.webp",
          "caption": "The energy shatters into seven elements"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_05.webp",
          "caption": "Glowing crystals representing the seven fundamental emotions"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_06.webp",
          "caption": "Interact with the elements directly with your hands"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_07.webp",
          "caption": "Inspecting the red glowing crystal"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_08.webp",
          "caption": "The crystal starts screaming and shouting in a musical way - anger"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_09.webp",
          "caption": "Sad orchestral strings start playing - grief"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_10.webp",
          "caption": "A purple crystal with an unsettling sound - fear"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_11.webp",
          "caption": "Happy sounds and faces - joy"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_12.webp",
          "caption": "Confetti and unexpected musical twists - surprise"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_13.webp",
          "caption": "The light adapts to the current emotion(s)"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_14.webp",
          "caption": "This element looks down on you - disdain"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_15.webp",
          "caption": "Various elements placed in the void"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_16.webp",
          "caption": "Various elements placed in the void"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_17.webp",
          "caption": "Interacting with surprise, revealing more surprises"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_18.webp",
          "caption": "Various elements placed in the void"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_19.webp",
          "caption": "Submerging the elements back into the water silences them"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_20.webp",
          "caption": "Putting the remaining element back into the water"
        },
        {
          "type": "img",
          "source": "/media/finding-emo/frames/frame_21.webp",
          "caption": "Emotions drowned in the void"
        }
      ]
    },
    {
      "id": "nftp",
      "title": "Notes from the Past",
      "description": "Notes from the Past is a Walking Simulator set in a post-apocalyptic world where humans became extinct. The player follows the story of an alien on the hunt for music discs who explores an abandoned house and discovers how its residents perceived the last days of humanity.",
      "text": "## Summary \n\nNotes from the Past explores human culture through the lens of an **alien lifeform**. Discovering the _Voyager_ probe and deciphering the **Golden Record** led these aliens to find music. Enthralled by melodies never thought possible, they began their **journey to Earth**. While exploring an abandoned house and its surroundings, an alien discovers the story of the family that lived there and of **humanity’s sudden end.**\n\nExplore an expansive house filled with puzzles. Collect artefacts of humanity and find out what caused civilization to end. Listen to recordings of the people that lived there and learn about their fate.",
      "hasTheme": true,
      "background": "bg.webp",
      "links": [{
        "target": "https://www.instagram.com/fhstp_games/",
        "label": "Instagram",
        "title": "fhstp_games on Instagram"
      }, {
        "target": "https://www.youtube.com/@fhstp-games6180",
        "label": "Youtube",
        "title": "fhstp-games on Youtube"
      }, {
        "target": "https://git.nwt.fhstp.ac.at/mt201010/NFTP-Game",
        "label": "Source code",
        "title": "nftp-game on FH GitLab"
      }],
      "media": [
        {
          "type": "img",
          "source": "/media/nftp/detail_helmet.webp",
          "caption": "In-game: Detail view"
        },
        {
          "type": "img",
          "source": "/media/nftp/ui/hud.webp",
          "caption": "HUD: Notification"
        },
        {
          "type": "img",
          "source": "/media/nftp/intro/city.webp",
          "caption": "Concept art: Alien civilization"
        },
        {
          "type": "img",
          "source": "/media/nftp/intro/suburb.webp",
          "caption": "Concept art: Post-apocalyptic suburb"
        },
        {
          "type": "img",
          "source": "/media/nftp/intro/voyager.webp",
          "caption": "Concept art: Voyager probe approaching a foreign planet"
        },
        {
          "type": "img",
          "source": "/media/nftp/intro/golden-record.webp",
          "caption": "Concept art: Golden record"
        },
        {
          "type": "img",
          "source": "/media/nftp/intro/crash.webp",
          "caption": "Concept art: Voyager probe crashing on a foreign planet"
        },
        {
          "type": "img",
          "source": "/media/nftp/intro/spaceship.webp",
          "caption": "Concept art: Alien spaceship landing on Earth"
        },
        {
          "type": "img",
          "source": "/media/nftp/ui/collection.webp",
          "caption": "UI: Collected items"
        },
        {
          "type": "img",
          "source": "/media/nftp/ui/credits.webp",
          "caption": "UI: Credits"
        },
        {
          "type": "img",
          "source": "/media/nftp/ui/settings_video.webp",
          "caption": "UI: Video settings"
        },
        {
          "type": "img",
          "source": "/media/nftp/ui/startscreen.webp",
          "caption": "UI: Start screen"
        },
        {
          "type": "img",
          "source": "/media/nftp/ui/transponder.webp",
          "caption": "UI: Transponder"
        }
      ]
    }, {
      "id": "cajetan",
      "title": "cajetan.dev",
      "description": "My personal website, containing information about me and a portfolio of some of my projects. Made with Svelte(Kit).",
      "text": "",
      "thumbnail": "thumb.webp",
      "links": [{
        "target": "https://github.com/krokettenkoal/cgrill-web",
        "label": "Source code",
        "title": "cgrill-web on GitHub"
      }]
    }, {
      "id": "jhs",
      "title": "Jesus Heist, Superstar",
      "description": "Playing the Anointed Savior himself, you are on a holy mission to collect the humanly debts from the central bank vault. Since god's plan is - again - not meet and right so to do in many terrestrial eyes, you have to be careful! Try not to get caught and haul as much sinful cash as possible, but watch out: Your time on earth is limited.",
      "text": "## Mission objectives\n\nIn order to gain access to the main vault, you need to find the according keycard in the map. There are three different types of keycards:\n- Employee Keycard\n- CEO Keycard\n- Security Keycard\n\nThe keycards spawn on random positions in the world and unlock various numbers of doors according to their security level. Having acquired all necessary keycards, your next goal is to find and open the main vault. Grab as much cash and valuables you can and escape by using one of the getaway opportunities before time runs off.\n\nAdditionally to the main objectives, you can also try to gain access to the security room and disable all CCTV cameras. This gives you a time bonus and makes moving inside the building easier.\n\n## Code-locked doors\n\nAs soon as the alarm is triggered, all doors are being closed and locked by a random 4-digit numeric code. To unlock a code-locked door, type in the highlighted digits in ascending order in the keypad.",
      "background": "poster.webp",
      "links": [{
        "target": "https://git.nwt.fhstp.ac.at/mt201096/jesus-heist-superstar",
        "label": "Source code",
        "title": "jesus-heist-superstar on FH GitLab"
      }],
      "media": [
        {
          "type": "img",
          "source": "/media/jhs/screenshots/spawn.webp",
          "caption": "In-game: Outside"
        },
        {
          "type": "img",
          "source": "/media/jhs/screenshots/entry.webp",
          "caption": "In-game: Hall"
        },
        {
          "type": "img",
          "source": "/media/jhs/screenshots/cctv.webp",
          "caption": "In-game: CCTV"
        },
        {
          "type": "img",
          "source": "/media/jhs/screenshots/atm.webp",
          "caption": "In-game: ATM"
        },
        {
          "type": "img",
          "source": "/media/jhs/screenshots/lasers.webp",
          "caption": "In-game: Security system"
        },
        {
          "type": "img",
          "source": "/media/jhs/screenshots/alarm_engaged.webp",
          "caption": "In-game: Alarm engaged"
        },
        {
          "type": "img",
          "source": "/media/jhs/screenshots/ui_menu.webp",
          "caption": "In-game: Pause menu"
        },
        {
          "type": "img",
          "source": "/media/jhs/graphics/mission_complete.webp",
          "caption": "Artwork: Mission complete"
        },
        {
          "type": "img",
          "source": "/media/jhs/graphics/mission_failed.webp",
          "caption": "Artwork: Mission failed"
        },
        {
          "type": "img",
          "source": "/media/jhs/graphics/poster.webp",
          "caption": "Artwork: Poster"
        }
      ]
    }, {
      "id": "orderbar",
      "title": "Orderbar",
      "description": "Digital restaurant menu as a semester project for SWE-SWA lecture, bmt20.",
      "text": "## Summary\n\nOrderbar is a digital menu with order functionality as well as a management view for staff. The application is realized using the [Windows Presentation Foundation](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-wpf?view=vs-2022#what-is-wpf) (WPF), targeting .NET 6. For the project presentation, the final application was built for the fictional restaurant *Hephaistos*, but can easily be adapted for any restaurant, bar or other business with table service.",
      "hasTheme": true,
      "background": "bg.webp",
      "links": [{
        "target": "https://git.nwt.fhstp.ac.at/mt201096/orderbar",
        "label": "Source code",
        "title": "orderbar on FH GitLab"
      }],
      "media": [{
        "type": "img",
        "source": "/media/orderbar/guest/welcome.webp",
        "caption": "Guest: Welcome view"
      }, {
        "type": "img",
        "source": "/media/orderbar/guest/overview.webp",
        "caption": "Guest: Overview"
      }, {
        "type": "img",
        "source": "/media/orderbar/guest/drinks.webp",
        "caption": "Guest: Order drinks"
      }, {
        "type": "img",
        "source": "/media/orderbar/guest/order-submit.webp",
        "caption": "Guest: Review order"
      }, {
        "type": "img",
        "source": "/media/orderbar/staff/overview.webp",
        "caption": "Staff: Overview"
      }, {
        "type": "img",
        "source": "/media/orderbar/staff/table-view.webp",
        "caption": "Staff: Table view"
      }]
    }]
};
