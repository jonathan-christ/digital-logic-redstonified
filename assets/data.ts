type data = {
    [k: string]: {
        title: string,
        category: string,
        data: {
            Introduction: string[];
            Obtaining: string[];
            Properties: string[];
            Usage: string[];
            Mechanics: string[];
            "Technical Information": string[];
            Tutorials: string[];
            Trivia: string[];
            Gallery: string[];
        }
    }
}

export const Data: data = {
    "Redstone Dust": {
        title: "Redstone Dust",
        category: "Basic Components",
        data: {
            "Introduction": [
                "A glowing red dust that forms the foundation of redstone engineering in Minecraft.",
                "Used to transmit electrical signals to power and activate various contraptions."
            ],
            "Obtaining": [
                "Mined from redstone ore found underground.",
                "Redstone ore drops redstone dust when mined with any tool."
            ],
            "Properties": [
                "Glowing red powder that can be placed on top of solid blocks.",
                "Stacks up to 64 redstone dust per inventory slot."
            ],
            "Usage": [
                "Placed as a wire to carry redstone signals between components.",
                "Can be activated by redstone torches, buttons, levers, and other redstone components.",
                "Signal strength weakens over distance."
            ],
            "Mechanics": [
                "Redstone signal travels through the dust one block at a time per redstone tick (game update).",
                "Signal strength weakens by one level for every 15 blocks traveled.",
                "Repeaters can be used to extend and strengthen signals."
            ],
            "Technical Information": [
                "Redstone dust is a block entity with data values for signal strength (0-15).",
                "Can be powered by various sources and transmits the power level as a signal."
            ],
            "Tutorials": [
                "Basic redstone line",
                "Branching redstone signals",
                "Using redstone dust with pistons"
            ],
            "Trivia": [
                "Redstone is inspired by real-world redstone, a mineral with no electrical properties.",
                "Redstone dust can be used to craft some items like redstone torches and repeaters."
            ],
            "Gallery": [
                "Image of redstone dust on blocks",
                "Image of redstone dust powering a redstone torch"
            ]
        },
        
    },
    "Redstone Torch": {
        title: "Redstone Torch",
        category: "Basic Components",
        data: {
            "Introduction": [
                "A Redstone torch is a light-emitting block, similar to a regular Torch, except dimmer. ",
                "Since it is a Redstone-device, it can also serve some additional functions.",
            ],
            "Obtaining": [
                "Can be broken instantly using with or without any tool."
            ],
            "Properties": [
                "Acts as a torch that can be placed on top or side of solid blocks.",
                "Stacks up to 64 redstone torches per inventory slot."
            ],
            "Usage": [
                "Dim light source.",
                "Power sources for redstone devices.",
                "An inverter for redstone circuits."
            ],
            "Mechanics": [
                "Looks like a glowing red torch, although dimmer than normal torches.",
                "Can't melt ice or prevent mob-spawning like normal torches.",
                "Can provide power for redstone wires for 15 blocks(two-game ticks, 0.1 seconds)."
            ],
            "Technical Information": [
                "Redstone torch is a non-solid block that produces a full-strength redstone signal(15) on all sides adjacent to it.",
                "Deactivates when the block it's attached to is powered."
            ],
            "Tutorials": [
                "Crafting redstone torches",
                "Making a redstone NOT gate"
            ],
            "Trivia": [
                "In Minecraft Earth, the icon in the inventory shows an unlit redstone torch",
            ],
            "Gallery": [
                "Image of redstone torch",
                "Image of unlit redstone torch",
                "Image of torch on wall",
                "Image of unlit torch on wall"
            ]
        }
    },
    "Redstone Repeater": {
        "title": "Redstone Repeater",
        "category": "Basic Components",
        "data": {
            "Introduction": [
                "A block used in redstone circuits to delay signals, repeat signals, or prevent backflow of signals.",
                "Essential for advanced redstone engineering in Minecraft."
            ],
            "Obtaining": [
                "Crafted using 3 stone, 2 redstone torches, and 1 redstone dust.",
                "Can also be obtained by breaking an existing redstone repeater."
            ],
            "Properties": [
                "Occupies a single block space and is directional.",
                "Can be rotated to change the direction of the signal.",
                "Stacks up to 64 repeaters per inventory slot."
            ],
            "Usage": [
                "Used to extend the range of redstone signals beyond 15 blocks.",
                "Can be used to introduce a delay in redstone circuits, adjustable from 1 to 4 redstone ticks.",
                "Prevents redstone signals from flowing backward."
            ],
            "Mechanics": [
                "Repeater delay can be adjusted by right-clicking, with each click increasing the delay by 1 tick (up to 4 ticks).",
                "Extends signal strength back to 15 after the delay.",
                "Can lock other repeaters when powered from the side, preventing signal changes."
            ],
            "Technical Information": [
                "Redstone repeater is a block entity with data values for delay (1-4) and direction.",
                "Can be powered from the back, and outputs power to the front."
            ],
            "Tutorials": [
                "Creating a basic redstone repeater circuit",
                "Using repeaters to synchronize pistons",
                "Building a redstone clock with repeaters"
            ],
            "Trivia": [
                "Redstone repeaters were added to the game in Beta 1.3.",
                "They can lock other repeaters when powered, a feature added in version 1.5."
            ],
            "Gallery": [
                "Image of redstone repeater in a circuit",
                "Image of repeater delay settings"
            ]
        }
    },
    "Lever": {
        "title": "Lever",
        "category": "Basic Components",
        "data": {
            "Introduction": [
                "A simple switch used to activate or deactivate redstone devices and mechanisms.",
                "Essential for manually controlling redstone circuits in Minecraft."
            ],
            "Obtaining": [
                "Crafted using 1 stick and 1 cobblestone.",
                "Can also be obtained by breaking an existing lever."
            ],
            "Properties": [
                "Occupies a single block space and can be placed on the top, sides, or bottom of blocks.",
                "Toggleable between on and off states by right-clicking.",
                "Stacks up to 64 levers per inventory slot."
            ],
            "Usage": [
                "Used to provide a continuous redstone signal when in the on position.",
                "Can activate various redstone components such as doors, pistons, and redstone lamps.",
                "Useful for manual control of redstone circuits and mechanisms."
            ],
            "Mechanics": [
                "Provides a redstone signal strength of 15 when turned on.",
                "Can be attached to any solid block and transmits signal through the block it's attached to.",
                "Signal turns off when the lever is toggled to the off position."
            ],
            "Technical Information": [
                "Lever is a block entity with data values for its state (on or off) and attachment direction.",
                "Emits a constant redstone signal of strength 15 when on."
            ],
            "Tutorials": [
                "Using a lever to control a door",
                "Setting up a lever-activated trap",
                "Integrating a lever into a redstone circuit"
            ],
            "Trivia": [
                "Levers are one of the simplest redstone components, functioning as a basic switch.",
                "Can be placed on almost any solid block, including the sides and bottoms of blocks."
            ],
            "Gallery": [
                "Image of lever in the on position",
                "Image of lever controlling a redstone lamp"
            ]
        }
    },
    "Redstone Lamp": {
        "title": "Redstone Lamp",
        "category": "Basic Components",
        "data": {
            "Introduction": [
                "A block that emits light when powered by a redstone signal.",
                "Used to create lighting systems in Minecraft that can be controlled with redstone."
            ],
            "Obtaining": [
                "Crafted using 4 redstone dust and 1 glowstone.",
                "Can also be obtained by breaking an existing redstone lamp."
            ],
            "Properties": [
                "Emits light with a light level of 15 when powered.",
                "Does not emit light when unpowered.",
                "Stacks up to 64 redstone lamps per inventory slot."
            ],
            "Usage": [
                "Used as a light source that can be toggled on and off using redstone signals.",
                "Can be used to create complex lighting systems, such as automatic lights or signal indicators.",
                "Activated by any redstone power source, including levers, buttons, pressure plates, and redstone circuits."
            ],
            "Mechanics": [
                "Emits light only when receiving a redstone signal.",
                "Turns off immediately when the redstone signal is removed.",
                "Can be powered directly or indirectly by redstone components."
            ],
            "Technical Information": [
                "Redstone lamp is a block entity with data values for its powered state (on or off).",
                "Emits a light level of 15 when powered, equivalent to glowstone."
            ],
            "Tutorials": [
                "Creating a redstone lamp lighting system",
                "Using redstone lamps with daylight sensors",
                "Building a redstone lamp indicator panel"
            ],
            "Trivia": [
                "Redstone lamps were added in version 1.2.1.",
                "Unlike torches, redstone lamps can be controlled with redstone circuits for more dynamic lighting."
            ],
            "Gallery": [
                "Image of redstone lamp in the on state",
                "Image of redstone lamp controlled by a lever"
            ]
        }
    },
    
    "XOR Gate": {
        title: "XOR Gate",
        category: "Digital Logic Gates",
        data: {
            "Introduction": [
                "A glowing red dust that forms the foundation of redstone engineering in Minecraft.",
                "Used to transmit electrical signals to power and activate various contraptions."
            ],
            "Obtaining": [
                "Mined from redstone ore found underground.",
                "Redstone ore drops redstone dust when mined with any tool."
            ],
            "Properties": [
                "Glowing red powder that can be placed on top of solid blocks.",
                "Stacks up to 64 redstone dust per inventory slot."
            ],
            "Usage": [
                "Placed as a wire to carry redstone signals between components.",
                "Can be activated by redstone torches, buttons, levers, and other redstone components.",
                "Signal strength weakens over distance."
            ],
            "Mechanics": [
                "Redstone signal travels through the dust one block at a time per redstone tick (game update).",
                "Signal strength weakens by one level for every 15 blocks traveled.",
                "Repeaters can be used to extend and strengthen signals."
            ],
            "Technical Information": [
                "Redstone dust is a block entity with data values for signal strength (0-15).",
                "Can be powered by various sources and transmits the power level as a signal."
            ],
            "Tutorials": [
                "Basic redstone line",
                "Branching redstone signals",
                "Using redstone dust with pistons"
            ],
            "Trivia": [
                "Redstone is inspired by real-world redstone, a mineral with no electrical properties.",
                "Redstone dust can be used to craft some items like redstone torches and repeaters."
            ],
            "Gallery": [
                "Image of redstone dust on blocks",
                "Image of redstone dust powering a redstone torch"
            ]
        }
    },
    "NOR Gate": {
        title: "XOR Gate",
        category: "Digital Logic Gates",
        data: {
            "Introduction": [
                "A glowing red dust that forms the foundation of redstone engineering in Minecraft.",
                "Used to transmit electrical signals to power and activate various contraptions."
            ],
            "Obtaining": [
                "Mined from redstone ore found underground.",
                "Redstone ore drops redstone dust when mined with any tool."
            ],
            "Properties": [
                "Glowing red powder that can be placed on top of solid blocks.",
                "Stacks up to 64 redstone dust per inventory slot."
            ],
            "Usage": [
                "Placed as a wire to carry redstone signals between components.",
                "Can be activated by redstone torches, buttons, levers, and other redstone components.",
                "Signal strength weakens over distance."
            ],
            "Mechanics": [
                "Redstone signal travels through the dust one block at a time per redstone tick (game update).",
                "Signal strength weakens by one level for every 15 blocks traveled.",
                "Repeaters can be used to extend and strengthen signals."
            ],
            "Technical Information": [
                "Redstone dust is a block entity with data values for signal strength (0-15).",
                "Can be powered by various sources and transmits the power level as a signal."
            ],
            "Tutorials": [
                "Basic redstone line",
                "Branching redstone signals",
                "Using redstone dust with pistons"
            ],
            "Trivia": [
                "Redstone is inspired by real-world redstone, a mineral with no electrical properties.",
                "Redstone dust can be used to craft some items like redstone torches and repeaters."
            ],
            "Gallery": [
                "Image of redstone dust on blocks",
                "Image of redstone dust powering a redstone torch"
            ]
        }
    },
    "OR Gate": {
        title: "XOR Gate",
        category: "Digital Logic Gates",
        data: {
            "Introduction": [
                "A glowing red dust that forms the foundation of redstone engineering in Minecraft.",
                "Used to transmit electrical signals to power and activate various contraptions."
            ],
            "Obtaining": [
                "Mined from redstone ore found underground.",
                "Redstone ore drops redstone dust when mined with any tool."
            ],
            "Properties": [
                "Glowing red powder that can be placed on top of solid blocks.",
                "Stacks up to 64 redstone dust per inventory slot."
            ],
            "Usage": [
                "Placed as a wire to carry redstone signals between components.",
                "Can be activated by redstone torches, buttons, levers, and other redstone components.",
                "Signal strength weakens over distance."
            ],
            "Mechanics": [
                "Redstone signal travels through the dust one block at a time per redstone tick (game update).",
                "Signal strength weakens by one level for every 15 blocks traveled.",
                "Repeaters can be used to extend and strengthen signals."
            ],
            "Technical Information": [
                "Redstone dust is a block entity with data values for signal strength (0-15).",
                "Can be powered by various sources and transmits the power level as a signal."
            ],
            "Tutorials": [
                "Basic redstone line",
                "Branching redstone signals",
                "Using redstone dust with pistons"
            ],
            "Trivia": [
                "Redstone is inspired by real-world redstone, a mineral with no electrical properties.",
                "Redstone dust can be used to craft some items like redstone torches and repeaters."
            ],
            "Gallery": [
                "Image of redstone dust on blocks",
                "Image of redstone dust powering a redstone torch"
            ]
        }
    },
    "AND Gate": {
        title: "XOR Gate",
        category: "Digital Logic Gates",
        data: {
            "Introduction": [
                "A glowing red dust that forms the foundation of redstone engineering in Minecraft.",
                "Used to transmit electrical signals to power and activate various contraptions."
            ],
            "Obtaining": [
                "Mined from redstone ore found underground.",
                "Redstone ore drops redstone dust when mined with any tool."
            ],
            "Properties": [
                "Glowing red powder that can be placed on top of solid blocks.",
                "Stacks up to 64 redstone dust per inventory slot."
            ],
            "Usage": [
                "Placed as a wire to carry redstone signals between components.",
                "Can be activated by redstone torches, buttons, levers, and other redstone components.",
                "Signal strength weakens over distance."
            ],
            "Mechanics": [
                "Redstone signal travels through the dust one block at a time per redstone tick (game update).",
                "Signal strength weakens by one level for every 15 blocks traveled.",
                "Repeaters can be used to extend and strengthen signals."
            ],
            "Technical Information": [
                "Redstone dust is a block entity with data values for signal strength (0-15).",
                "Can be powered by various sources and transmits the power level as a signal."
            ],
            "Tutorials": [
                "Basic redstone line",
                "Branching redstone signals",
                "Using redstone dust with pistons"
            ],
            "Trivia": [
                "Redstone is inspired by real-world redstone, a mineral with no electrical properties.",
                "Redstone dust can be used to craft some items like redstone torches and repeaters."
            ],
            "Gallery": [
                "Image of redstone dust on blocks",
                "Image of redstone dust powering a redstone torch"
            ]
        }
    }
    // "Redstone Torch": {
    //     // Similar structure for Redstone Torch and Repeater outlines
    // },
    // "Repeater": {
    //     // Similar structure for Repeater outlines
    // }
}