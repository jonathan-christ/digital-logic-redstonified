import images from "./images"

type data = {
    Components: components,
    Gates: gates
}

type components = {
    [k: string]: {
        title: string,
        category: string,
        image: object,
        data: {
            Introduction: string[];
            Obtaining: string[];
            Properties: string[];
            Usage: string[];
            Mechanics: string[];
            "Technical Information": string[];
            Tutorials: {
                text: string,
                img: object
            }[];
            Trivia: string[];
            Gallery: {
                text: string,
                img: object
            }[]; //link to Simulation
        }
    }
}

type gates = {
    [k: string]: {
        title: string,
        category: string,
        image: object,
        data: {
            "Description": string[];
            "Truth Table": {
                "Inputs": {
                    [x: string]: number[],
                },
                "Outputs": {
                    [y: string]: number[]
                }
            };
            "Components": string[];
            "Simulation": object[]; // link to Simulation
        }
    }
}

const circuits = '@/assets/images/circuits/'
const tutorials = '@/assets/images/items/tutorials/'
const gallery = '@/assets/images/items/gallery/'

const Components: components = {
    "Redstone Dust": {
        title: "Redstone Dust",
        category: "Basic Components",
        image: images.redstone,
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
                "Signal strength weakens by one level for every block traveled.",
                "Repeaters can be used to extend and strengthen signals."
            ],
            "Technical Information": [
                "Redstone dust is a block entity with data values for signal strength (0-15).",
                "Can be powered by various sources and transmits the power level as a signal."
            ],
            "Tutorials": [
                { text: "Basic redstone line", img: require(tutorials + 'r1.png') },
                { text: "Branching redstone signals", img: require(tutorials + 'r2.png') },
                { text: "Using redstone dust with pistons", img: require(tutorials + 'r3.png') }
            ],
            "Trivia": [
                "The block has 1,296 possible block state combinations, the highest of all blocks as of 1.15.2, beating fire's 512 and note block's 800.",
                "According to Minecraft Education, redstone dust contains radioactive elements."
            ],
            "Gallery": [
                { text: "Image of redstone dust on blocks", img: require(gallery + 'r1.png') },
                { text: "Image of redstone dust powering a redstone torch", img: require(gallery + 'r1.png') },
            ]
        },

    },
    "Redstone Torch": {
        title: "Redstone Torch",
        category: "Basic Components",
        image: images.rtorch,
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
                { text: "Crafting redstone torches", img: require(tutorials + 'rt1.png') },
                { text: "Making a redstone NOT gate", img: require(tutorials + 'rt2.png') }
            ],
            "Trivia": [
                "In Minecraft Earth, the icon in the inventory shows an unlit redstone torch",
            ],
            "Gallery": [
                { text: "Image of redstone torch", img: require(gallery + 'rt1.png') },
                { text: "Image of unlit redstone torch", img: require(gallery + 'rt2.png') },
                { text: "Image of torch on wall", img: require(gallery + 'rt3.png') },
                { text: "Image of unlit torch on wall", img: require(gallery + 'rt4.png') },
            ]
        }
    },
    "Redstone Repeater": {
        "title": "Redstone Repeater",
        "category": "Basic Components",
        image: images.repeater,
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
                { text: "Creating a basic redstone repeater circuit", img: require(tutorials + 'rr1.png') },
                { text: "Using repeaters to synchronize pistons", img: require(tutorials + 'rr2.png') },
                { text: "Building a redstone clock with repeaters", img: require(tutorials + 'rr3.png') }
            ],
            "Trivia": [
                "Redstone repeaters were added to the game in Beta 1.3.",
                "They can lock other repeaters when powered, a feature added in version 1.5."
            ],
            "Gallery": [
                { text: "Image of redstone repeater in a circuit", img: require(gallery + 'rr1.png') },
                { text: "Image of repeater delay settings", img: require(gallery + 'rr2.png') },
            ]
        }
    },
    "Lever": {
        "title": "Lever",
        "category": "Basic Components",
        image: images.lever,
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
                { text: "Using a lever to control a door", img: require(tutorials + 'l1.png') },
                { text: "Setting up a lever-activated trap", img: require(tutorials + 'l2.png') },
                { text: "Integrating a lever into a redstone circuit", img: require(tutorials + 'l3.png') }
            ],
            "Trivia": [
                "Levers are one of the simplest redstone components, functioning as a basic switch.",
                "Can be placed on almost any solid block, including the sides and bottoms of blocks."
            ],
            "Gallery": [
                { text: "Image of lever in the on position", img: require(gallery + 'l1.png') },
                { text: "Image of lever controlling a redstone lamp", img: require(gallery + 'l2.png') }
            ]
        }
    },
    "Redstone Lamp": {
        "title": "Redstone Lamp",
        "category": "Basic Components",
        image: images.lamp,
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
                { text: "Creating a redstone lamp lighting system", img: require(tutorials + 'rl1.png') },
                { text: "Using redstone lamps with daylight sensors", img: require(tutorials + 'rl2.png') },
                { text: "Building a redstone lamp indicator panel", img: require(tutorials + 'rl3.png') }
            ],
            "Trivia": [
                "Redstone lamps were added in version 1.2.1.",
                "Unlike torches, redstone lamps can be controlled with redstone circuits for more dynamic lighting."
            ],
            "Gallery": [
                { text: "Image of redstone lamp in the on state", img: require(gallery + 'rl1.png') },
                { text: "Image of redstone lamp controlled by a lever", img: require(gallery + 'rl2.png') }
            ]
        }
    }
}

const Gates: gates = {
    "NOT Gate": {
        "title": "NOT Gate",
        "category": "Logic Gates",
        image: images.not,
        "data": {
            "Description": [
                "A logic gate that inverts its input signal.",
                "Outputs a signal when the input is off, and vice versa."
            ],
            "Truth Table": {
                "Inputs": {
                    "A": [0, 1]
                },
                "Outputs": {
                    "F": [1, 0]
                }
            },
            "Components": [
                "1 Redstone torch",
                "1 Solid block"
            ],
            "Simulation": [
                require(circuits + 'NOT/NOT0.png'),
                require(circuits + 'NOT/NOT1.png')
            ]
        }
    },
    "OR Gate": {
        "title": "OR Gate",
        "category": "Logic Gates",
        image: images.or,
        "data": {
            "Description": [
                "A logic gate that accepts 2 or more inputs.",
                "Outputs a signal when either input is on."
            ],
            "Truth Table": {
                "Inputs": {
                    "A": [0, 0, 1, 1],
                    "B": [0, 1, 0, 1]
                },
                "Outputs": {
                    "F": [0, 1, 1, 1]
                }
            },
            "Components": [
                "4 Redstone dust",
                "2 Redstone repeater"
            ],
            "Simulation": [
                require(circuits + 'OR/OR00.png'),
                require(circuits + 'OR/OR01.png'),
                require(circuits + 'OR/OR10.png'),
                require(circuits + 'OR/OR11.png')
            ]
        }
    },
    "NOR Gate": {
        "title": "NOR Gate",
        "category": "Logic Gates",
        image: images.nor,
        "data": {
            "Description": [
                "A logic gate that accepts 2 or more inputs.",
                "Outputs a signal when no input is on."
            ],
            "Truth Table": {
                "Inputs": {
                    "A": [0, 0, 1, 1],
                    "B": [0, 1, 0, 1]
                },
                "Outputs": {
                    "F": [1, 0, 0, 0]
                }
            },
            "Components": [
                "3 Redstone dust",
                "2 Redstone repeaters",
                "1 Restone torch",
                "1 Solid block"
            ],
            "Simulation": [
                require(circuits + 'NOR/NOR00.png'),
                require(circuits + 'NOR/NOR01.png'),
                require(circuits + 'NOR/NOR10.png'),
                require(circuits + 'NOR/NOR11.png')
            ]
        }
    },
    "AND Gate": {
        "title": "AND Gate",
        "category": "Logic Gates",
        image: images.and,
        "data": {
            "Description": [
                "A logic gate that accepts 2 or more inputs.",
                "Outputs a signal when all inputs are on"
            ],
            "Truth Table": {
                "Inputs": {
                    "A": [0, 0, 1, 1],
                    "B": [0, 1, 0, 1]
                },
                "Outputs": {
                    "F": [0, 0, 0, 1]
                }
            },
            "Components": [
                "3 Redstone torches",
                "3 Solid blocks",
                "2 Redstone dust"
            ],
            "Simulation": [
                require(circuits + 'AND/AND00.png'),
                require(circuits + 'AND/AND01.png'),
                require(circuits + 'AND/AND10.png'),
                require(circuits + 'AND/AND11.png')
            ]
        }
    },
    "NAND Gate": {
        "title": "NAND Gate",
        "category": "Logic Gates",
        image: images.nand,
        "data": {
            "Description": [
                "A logic gate that accepts 2 or more inputs.",
                "Outputs a signal when either inputs or no inputs are on, but not all inputs."
            ],
            "Truth Table": {
                "Inputs": {
                    "A": [0, 0, 1, 1],
                    "B": [0, 1, 0, 1]
                },
                "Outputs": {
                    "F": [1, 1, 1, 0]
                }
            },
            "Components": [
                "2 Redstone dust",
                "2 Redstone torches",
                "2 Solid blocks"
            ],
            "Simulation": [
                require(circuits + 'NAND/NAND00.png'),
                require(circuits + 'NAND/NAND01.png'),
                require(circuits + 'NAND/NAND10.png'),
                require(circuits + 'NAND/NAND11.png')
            ]
        }
    },
    "XOR Gate": {
        "title": "XOR Gate",
        "category": "Logic Gates",
        image: images.xor,
        "data": {
            "Description": [
                "A logic gate that accepts 2 or more inputs.",
                "Outputs a signal when either, but not both inputs are on"
            ],
            "Truth Table": {
                "Inputs": {
                    "A": [0, 0, 1, 1],
                    "B": [0, 1, 0, 1]
                },
                "Outputs": {
                    "F": [0, 1, 1, 0]
                }
            },
            "Components": [
                "8 Redstone dust",
                "8 Solid blocks",
                "5 Redstone torches",
                "2 Redstone repeaters"
            ],
            "Simulation": [
                require(circuits + 'XOR/XOR00.png'),
                require(circuits + 'XOR/XOR01.png'),
                require(circuits + 'XOR/XOR10.png'),
                require(circuits + 'XOR/XOR11.png')
            ]
        }
    },
    "XNOR Gate": {
        "title": "XNOR Gate",
        "category": "Logic Gates",
        image: images.xnor,
        "data": {
            "Description": [
                "A logic gate that accepts 2 or more inputs.",
                "Outputs a signal when both inputs or no inputs are on"
            ],
            "Truth Table": {
                "Inputs": {
                    "A": [0, 0, 1, 1],
                    "B": [0, 1, 0, 1]
                },
                "Outputs": {
                    "F": [1, 0, 0, 1]
                }
            },
            "Components": [
                "8 Redstone dust",
                "8 Solid blocks",
                "6 Redstone torches",
                "2 Redstone repeaters"
            ],
            "Simulation": [
                require(circuits + 'XNOR/XNOR00.png'),
                require(circuits + 'XNOR/XNOR01.png'),
                require(circuits + 'XNOR/XNOR10.png'),
                require(circuits + 'XNOR/XNOR11.png')
            ]
        }
    }
}

export const Data: data = {
    Components,
    Gates
}

export const Merged = {
    ...Components,
    ...Gates,
}