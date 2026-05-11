# Project Unit-7 🎮

A cyberpunk-themed 2D platformer game built with Godot 4.4, featuring multiple playable characters, unique abilities, and mobile-optimized controls.

![Godot Engine](https://img.shields.io/badge/Godot-4.4-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Mobile%20%7C%20Desktop-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🌟 Features

### Multiple Playable Characters
- **Astra09** - Well-rounded character with balanced abilities
- **Rex** - Heavy character with wall-breaking ability
- **Kira** - Agile character with enhanced mobility
- **Nyxs** - Mysterious character with unique combat style

### Game Mechanics
- 🎯 **Character Switching** - Switch between 4 unique characters on the fly
- 🔫 **Combat System** - Dynamic shooting mechanics with projectiles
- 🧱 **Breakable Walls** - Rex can destroy obstacles with his special ability
- 🔒 **Locked Door System** - Level exit door that requires hacking to unlock
- 🧩 **Wire Puzzle Mini-Game** - Connect colored wires to matching sockets to hack the door
- 💻 **Astra09 Hacking** - Only Astra09 can hack the locked door (Press E to activate)
- ⚙️ **Interactive Objects** - Gear items that control environmental mechanics
- 🤖 **Smart AI Enemies** - NeuroBone and Battle Tank enemies with intelligent behavior
- 💪 **Character Abilities** - Each character has unique special abilities

### User Interface
- 📱 **Mobile-Optimized Controls**
  - Virtual joystick for movement
  - Touch buttons for jump, shoot, and abilities
  - Hamburger menu for in-game options
- 🎨 **Cyberpunk UI Design** - Neon cyan color scheme with futuristic aesthetics
- 📊 **Health Bars** - Visual health indicators for all characters
- 🖼️ **Character Portraits** - Quick character selection via portrait system

### Menu System
- 🏠 **Main Menu** - Start New Game, Continue, Options, Quit
- ⏸️ **Pause Menu** - Resume, Save, Load, Options, Restart, Back to Menu
- 💾 **Save/Load System** - (Coming Soon) Persistent game progress

## 🎮 Controls

### Desktop
- **Arrow Keys / WASD** - Movement
- **Space** - Jump / Double Jump
- **Mouse Click** - Shoot
- **E** - Use Ability / Hack Door (Astra09 only)
- **ESC / ☰ Menu** - Pause Game
- **During Wire Puzzle:**
  - **Mouse Drag** - Connect wires to sockets
  - **ESC** - Cancel puzzle

### Mobile
- **Virtual Joystick** - Character movement
- **Jump Button** - Jump and double jump
- **Shoot Button** - Fire projectiles
- **Ability Button** - Activate character-specific abilities
- **☰ Button** - Access pause menu

## 🚀 Getting Started

### Prerequisites
- Godot Engine 4.4 or later
- Git (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/versa-nova/Project-Unit-7.git
   cd Project-Unit-7
   ```

2. **Open in Godot**
   - Launch Godot Engine
   - Click "Import"
   - Navigate to the project folder
   - Select `project.godot`
   - Click "Import & Edit"

3. **Run the game**
   - Press `F5` or click the "Play" button in Godot Editor
   - For mobile testing, use Godot's remote debug feature

## 🏗️ Project Structure

```
Project-Unit-7/
├── Characters/           # Character sprites and animations
│   ├── astra_*          # Astra character animation frames
│   ├── kira-*           # Kira character animations
│   ├── rex_*            # Rex character animations
│   └── Enemies/         # Enemy sprites
├── TileMap/             # Level tiles and background images
├── assets/              # Game assets
│   ├── Items/           # Item sprites and weapons
│   └── Joystick/        # Mobile UI textures
├── *.gd                 # GDScript files
│   ├── PlayerController.gd      # Main player movement/animation
│   ├── character_manager.gd     # Character selection & management
│   ├── NeuroBoneAI.gd          # Enemy AI system
│   ├── BreakableWall.gd        # Destructible wall mechanics
│   ├── GearItem.gd             # Interactive gear object
│   ├── MobileUI.gd             # Mobile controls & pause menu
│   └── MainMenu.gd             # Main menu system
├── *.tscn               # Godot scene files
├── project.godot        # Godot project configuration
└── export_presets.cfg   # Export settings for Android
```

## 🎨 Game Design

### Visual Style
- **Theme**: Cyberpunk/Sci-Fi
- **Resolution**: 1920x1080 (Mobile Orientation)
- **Color Palette**: Neon cyan, dark blues, industrial grays
- **Art Style**: 2D sprite-based with parallax backgrounds

### Combat System
- **Player Projectiles**: Fast-moving bullets with collision detection
- **Enemy AI**: Patrol, chase, and attack patterns
- **Damage System**: Percentage-based health reduction
- **Visual Feedback**: Red flash and shake effects on hit

### Character Abilities
- **Rex's Wall Break**: Requires 3 hits to destroy walls with visual feedback
- **Gear Activation**: Environmental interaction via ability button
- **Character Switching**: Instant character swaps with portrait selection

## 🛠️ Development

### Built With
- **Engine**: Godot 4.4.1
- **Language**: GDScript
- **Rendering**: Vulkan (Mobile Forward+)
- **Platform**: Mobile & Desktop

### Key Systems
1. **PlayerController** - Handles movement, jumping, shooting, and animations
2. **CharacterManager** - Manages character selection, camera, and UI coordination
3. **AI System** - Enemy behavior with detection, chase, and combat
4. **Collision System** - Multi-layer collision for players, enemies, and projectiles
5. **Animation System** - State-based character animations (idle, run, jump)

## 🎯 Roadmap

### Upcoming Features
- [ ] Complete save/load system
- [ ] Options menu (sound, graphics, controls)
- [ ] More levels and environments
- [ ] Additional character abilities
- [ ] Boss battles
- [ ] Power-ups and collectibles
- [ ] Achievements system
- [ ] Mobile touch optimization improvements

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎮 Credits

**Developer**: Project Unit-7 Team  
**Engine**: Godot Engine  
**Art**: Custom sprite work and assets

## 🐛 Known Issues

- Save/Load system is not yet implemented
- Options menu features are placeholders
- Some animations may need polish

## 📧 Contact

For questions, suggestions, or bug reports, please open an issue on GitHub.

---

**Made with ❤️ using Godot Engine**
