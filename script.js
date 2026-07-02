'use strict';

const OBJECTS = [
'Chair',
  'Mug',
  'Fork',
  'Wallet',
  'Toothbrush',
  'Backpack',
  'Umbrella',
  'Spoon',
  'Plate',
  'Bowl',
  'Cup',
  'Glass',
  'Kettle',
  'Toaster',
  'Blender',
  'Saucepan',
  'Frying Pan',
  'Cutting Board',
  'Knife',
  'Whisk',
  'Spatula',
  'Tongs',
  'Ladle',
  'Peeler',
  'Grater',
  'Measuring Cup',
  'Measuring Spoon',
  'Rolling Pin',
  'Mixing Bowl',
  'Colander',
  'Garlic Press',
  'Can Opener',
  'Bottle Opener',
  'Corkscrew',
  'Tea Strainer',
  'Coffee Filter',
  'Thermos',
  'Lunch Box',
  'Water Bottle',
  'Travel Mug',
  'Jar',
  'Storage Container',
  'Food Clip',
  'Zip Bag',
  'Foil Roll',
  'Cling Wrap',
  'Paper Towel',
  'Napkin',
  'Placemat',
  'Coaster',
  'Tray',
  'Oven Mitt',
  'Apron',
  'Dish Towel',
  'Sponge',
  'Scrub Brush',
  'Dish Rack',
  'Soap Dispenser',
  'Bin Bag',
  'Trash Can',
  'Recycling Bin',
  'Broom',
  'Dustpan',
  'Mop',
  'Bucket',
  'Vacuum',
  'Lint Roller',
  'Laundry Basket',
  'Clothes Peg',
  'Hanger',
  'Iron',
  'Ironing Board',
  'Steamer',
  'Sewing Kit',
  'Needle',
  'Thread Spool',
  'Button',
  'Safety Pin',
  'Tape Measure',
  'Scissors',
  'Glue Stick',
  'Stapler',
  'Staple Remover',
  'Paper Clip',
  'Binder Clip',
  'Rubber Band',
  'Envelope',
  'Notebook',
  'Notepad',
  'Sticky Note',
  'Index Card',
  'Folder',
  'Binder',
  'Clipboard',
  'Pencil',
  'Pen',
  'Marker',
  'Highlighter',
  'Crayon',
  'Eraser',
  'Sharpener',
  'Ruler',
  'Calculator',
  'Desk Lamp',
  'Mouse',
  'Keyboard',
  'Monitor',
  'Laptop',
  'Tablet',
  'Phone',
  'Charger',
  'Charging Cable',
  'Power Bank',
  'Power Strip',
  'Extension Cord',
  'Adapter',
  'Earbuds',
  'Headphones',
  'Speaker',
  'Remote Control',
  'Camera',
  'Tripod',
  'Memory Card',
  'USB Drive',
  'Hard Drive',
  'Router',
  'Clock',
  'Alarm Clock',
  'Watch',
  'Calendar',
  'Mirror',
  'Photo Frame',
  'Candle',
  'Vase',
  'Plant Pot',
  'Curtain',
  'Cushion',
  'Pillow',
  'Blanket',
  'Bedsheet',
  'Duvet',
  'Mattress',
  'Rug',
  'Doormat',
  'Shoe Rack',
  'Bookend',
  'Basket',
  'Storage Box',
  'Tissue Box',
  'Fan',
  'Air Purifier',
  'Humidifier',
  'Dehumidifier',
  'Heater',
  'Thermometer',
  'First Aid Kit',
  'Plaster',
  'Bandage',
  'Medicine Box',
  'Pill Case',
  'Cotton Bud',
  'Cotton Pad',
  'Towel',
  'Hand Towel',
  'Bath Mat',
  'Shampoo Bottle',
  'Conditioner Bottle',
  'Body Wash',
  'Face Wash',
  'Soap Bar',
  'Toothpaste',
  'Dental Floss',
  'Mouthwash',
  'Comb',
  'Hair Brush',
  'Hairdryer',
  'Hair Clip',
  'Hair Tie',
  'Razor',
  'Nail Clipper',
  'Tweezers',
  'Makeup Brush',
  'Compact Mirror',
  'Lip Balm',
  'Sunscreen',
  'Lotion Bottle',
  'Perfume Bottle',
  'Deodorant',
  'Tissue Pack',
  'Wet Wipes',
  'Toilet Roll',
  'Toilet Brush',
  'Plunger',
  'Shower Cap',
  'Bath Sponge',
  'Laundry Detergent',
  'Fabric Softener',
  'Stain Remover',
  'Clothesline',
  'Drying Rack',
  'Shoe Brush',
  'Shoe Horn',
  'Shoelace',
  'Sneaker',
  'Slipper',
  'Sock',
  'Glove',
  'Scarf',
  'Hat',
  'Cap',
  'Belt',
  'Tie',
  'Watch Strap',
  'Sunglasses',
  'Reading Glasses',
  'Glasses Case',
  'Ring Box',
  'Jewellery Box',
  'Coin Purse',
  'Keychain',
  'House Key',
  'Padlock',
  'Luggage Tag',
  'Suitcase',
  'Duffel Bag',
  'Tote Bag',
  'Pouch',
  'Passport Cover',
  'Travel Pillow',
  'Eye Mask',
  'Ear Plug',
  'Packing Cube',
  'Umbrella Cover',
  'Hand Sanitiser',
  'Mask',
  'Ticket Holder',
  'Neck Pillow',
  'Compass',
  'Torch',
  'Flashlight',
  'Lantern',
  'Battery',
  'Matches Box',
  'Picnic Mat',
  'Cooler Bag',
  'Ice Pack',
  'Thermal Bag',
  'Bottle Brush',
  'Straw',
  'Reusable Straw',
  'Chopsticks',
  'Soup Spoon',
  'Butter Knife',
  'Bread Knife',
  'Pizza Cutter',
  'Egg Whisk',
  'Egg Timer',
  'Egg Cup',
  'Tea Pot',
  'Coffee Mug',
  'French Press',
  'Coffee Grinder',
  'Milk Frother',
  'Ice Tray',
  'Cake Tin',
  'Muffin Tray',
  'Baking Sheet',
  'Baking Paper',
  'Cake Server',
  'Sieve',
  'Mortar and Pestle',
  'Pepper Grinder',
  'Salt Shaker',
  'Sugar Bowl',
  'Oil Bottle',
  'Vinegar Bottle',
  'Sauce Bottle',
  'Cereal Box',
  'Milk Carton',
  'Juice Carton',
  'Snack Bag',
  'Chip Tube',
  'Biscuit Tin',
  'Tea Box',
  'Coffee Tin',
  'Noodle Packet',
  'Rice Bag',
  'Pasta Box',
  'Jam Jar',
  'Honey Bottle',
  'Peanut Butter Jar',
  'Spice Jar',
  'Lunch Bag',
  'Bento Box',
  'Water Jug',
  'Pitcher',
  'Serving Spoon',
  'Salad Bowl',
  'Salad Spinner',
  'Ice Cream Scoop',
  'Pot Holder',
  'Kitchen Scale',
  'Digital Scale',
  'Timer',
  'Magnet',
  'Fridge Magnet',
  'Whiteboard',
  'Whiteboard Eraser',
  'Notice Board',
  'Push Pin',
  'Thumb Tack',
  'Washi Tape',
  'Masking Tape',
  'Clear Tape',
  'Tape Dispenser',
  'Correction Tape',
  'Correction Pen',
  'Hole Punch',
  'File Divider',
  'Document Tray',
  'Pen Cup',
  'Desk Mat',
  'Mouse Pad',
  'Laptop Stand',
  'Phone Stand',
  'Tablet Stand',
  'Cable Tie',
  'Cable Organiser',
  'Cord Reel',
  'Webcam',
  'Microphone',
  'Game Controller',
  'TV Remote',
  'Smart Plug',
  'Light Bulb',
  'Night Light',
  'Fairy Lights',
  'Power Adapter',
  'Screen Cloth',
  'Lens Cloth',
  'Cleaning Spray',
  'Duster',
  'Feather Duster',
  'Squeegee',
  'Window Cloth',
  'Scraper',
  'Garden Hose',
  'Watering Can',
  'Spray Bottle',
  'Plant Mister',
  'Garden Trowel',
  'Pruning Shears',
  'Gardening Gloves',
  'Rake',
  'Small Shovel',
  'Flower Pot',
  'Seed Packet',
  'Plant Label',
  'Bird Feeder',
  'Door Stop',
  'Door Hook',
  'Wall Hook',
  'Command Hook',
  'Coat Hook',
  'Drawer Divider',
  'Shelf',
  'Book',
  'Magazine',
  'Bookmark',
  'Reading Light',
  'Pencil Case',
  'Card Holder',
  'Name Tag',
  'Lanyard',
  'Badge Holder',
  'Receipt',
  'Coupon',
  'Shopping Bag',
  'Reusable Bag',
  'Gift Bag',
  'Gift Box',
  'Ribbon',
  'Wrapping Paper',
  'Greeting Card',
  'Postcard',
  'Stamp',
  'Mailbox Key',
  'Coin',
  'Piggy Bank',
  'Wallet Chain',
  'Notebook Cover',
  'Sketchbook',
  'Paint Brush',
  'Watercolour Pan',
  'Palette',
  'Glue Bottle',
  'Craft Knife',
  'Cutting Mat',
  'String',
  'Twine',
  'Yarn Ball',
  'Knitting Needle',
  'Crochet Hook',
  'Bead Box',
  'Sticker Sheet',
  'Label Maker',
  'Label Sticker',
  'Rubber Stamp',
  'Ink Pad',
  'Clipboard Folder',
  'Accordion File',
  'File Box',
  'Magazine Holder',
  'Desktop Organizer',
  'Drawer Handle',
  'Cabinet Knob',
  'Light Switch',
  'Plug Socket',
  'Doorbell',
  'Remote Battery',
  'Coax Cable',
  'HDMI Cable',
  'Ethernet Cable',
  'SIM Pin',
  'Phone Case',
  'Screen Protector',
  'Stylus',
  'Smartwatch Charger',
  'Ring Light',
  'Selfie Stick',
  'Portable Fan',
  'Mini Fan',
  'Desk Clock',
  'Hourglass',
  'Magnifying Glass',
  'Binoculars',
  'Whistle',
  'Stopwatch',
  'Yoga Mat',
  'Skipping Rope',
  'Dumbbell',
  'Resistance Band',
  'Foam Roller',
  'Tennis Ball',
  'Badminton Racket',
  'Shuttlecock',
  'Table Tennis Bat',
  'Ping Pong Ball',
  'Basketball',
  'Football',
  'Water Goggles',
  'Swim Cap',
  'Swimming Towel',
  'Sports Bottle',
  'Gym Towel',
  'Knee Guard',
  'Wrist Band',
  'Helmet',
  'Bike Lock',
  'Bicycle Bell',
  'Bike Pump',
  'Reflector',
  'Saddle Bag',
  'Raincoat',
  'Poncho',
  'Hiking Pole',
  'Carabiner',
  'Foldable Chair',
  'Camping Mug',
  'Pocket Knife',
  'Multi Tool',
  'Toolbox',
  'Hammer',
  'Screwdriver',
  'Wrench',
  'Pliers',
  'Allen Key',
  'Measuring Tape',
  'Spirit Level',
  'Paint Roller',
  'Paint Tray',
  'Paint Can',
  'Sandpaper',
  'Nail Box',
  'Screw Box',
  'Wall Plug',
  'Super Glue',
  'Cable Clip',
  'Zip Tie',
  'Extension Reel',
  'Safety Goggles',
  'Dust Mask',
  'Work Gloves',
  'Bungee Cord',
  'Packing Tape',
  'Bubble Wrap',
  'Cardboard Box',
  'Parcel Bag',
  'Shipping Label',
  'Scale Ruler',
  'Protractor',
  'Set Square',
  'Compass Tool',
  'Graph Paper',
  'Flash Card',
  'Report File',
  'Lever Arch File',
  'Cash Box',
  'Receipt Book',
  'Stamp Pad',
  'Date Stamp',
  'Desk Calendar',
  'Planner',
  'Diary',
  'To Do Pad',
  'Memo Pad',
  'Letter Opener',
  'Mail Tray',
  'In Tray',
  'Out Tray',
  'Book Stand',
  'Laptop Sleeve',
  'Mouse Dongle',
  'Remote Holder',
  'Cup Sleeve',
  'Bottle Sleeve',
  'Soap Dish',
  'Toothbrush Holder',
  'Razor Holder',
  'Shower Squeegee',
  'Drain Cover',
  'Laundry Net',
  'Delicates Bag',
  'Sock Clip',
  'Blanket Bag',
  'Vacuum Bag',
  'Pillowcase',
  'Cushion Cover',
  'Tablecloth',
  'Table Runner',
  'Chair Pad',
  'Floor Cushion',
  'Bean Bag',
  'Ottoman',
  'Side Table',
  'Coffee Table',
  'Bedside Table',
  'Drawer',
  'Cabinet',
  'Wardrobe',
  'Laundry Hamper',
  'Shoe Box',
  'Boot Tray',
  'Umbrella Stand',
  'Key Bowl',
  'Catchall Tray',
  'Serving Tray',
  'Fruit Basket',
  'Bread Box',
  'Butter Dish',
  'Cheese Grater',
  'Citrus Squeezer',
  'Potato Masher',
  'Meat Tenderiser',
  'Pastry Brush',
  'Basting Brush',
  'Skewer',
  'Funnel',
  'Cookie Cutter',
  'Cupcake Liner',
  'Piping Bag',
  'Piping Tip',
  'Dough Scraper',
  'Bench Scraper',
  'Kitchen Torch',
  'Rice Paddle',
  'Soup Ladle',
  'Hot Pot Ladle',
  'Steamer Basket',
  'Wok',
  'Claypot',
  'Pressure Cooker',
  'Rice Cooker',
  'Air Fryer Basket',
  'Oven Rack',
  'Microwave Cover',
  'Splatter Guard',
  'Sink Strainer',
  'Dish Soap',
  'Dish Gloves',
  'Floor Wiper',
  'Hand Brush',
  'Cleaning Caddy',
  'Toilet Cleaner',
  'Glass Cleaner',
  'Laundry Scoop',
  'Peg Basket',
  'Mug Tree',
  'Knife Block',
  'Spice Rack',
  'Pan Lid',
  'Pot Lid',
  'Food Scale',
  'Recipe Card',
  'Menu Card',
  'Coaster Set',
  'Bottle Cap',
  'Jar Lid',
  'Tin Opener',
  'Tea Spoon',
  'Dessert Fork',
  'Serving Fork',
  'Gravy Boat',
  'Condiment Cup',
  'Saucer',
  'Chopping Mat',
  'Placard Holder',
  'Acrylic Stand',
  'Queue Number',
  'Name Card',
  'Business Card',
  'Card Wallet',
  'ID Card',
  'Transit Card',
  'Access Card',
  'Card Reader',
  'Barcode Scanner',
  'Receipt Printer',
  'Desk Fan',
  'Monitor Stand',
  'Foot Rest',
  'Wrist Rest',
  'Ergonomic Mouse',
  'Numeric Keypad',
  'Printer',
  'Ink Cartridge',
  'Toner Cartridge',
  'Paper Ream',
  'A4 Paper',
  'Photo Paper',
  'Laminating Pouch',
  'Laminator',
  'Paper Shredder',
  'Trash Liner',
  'Desk Bin',
  'Cable Sleeve',
  'Velcro Strap',
  'Magnetic Clip',
  'Book Clip',
  'Page Marker',
  'Binder Ring',
  'Split Pin',
  'Brass Fastener',
  'Drawing Pin',
  'Notice Magnet',
  'Desk Bell',
  'Call Bell',
  'Queue Bell',
  'Bell',
  'Alarm Sensor',
  'Smoke Detector',
  'Carbon Filter',
  'Water Filter',
  'Filter Jug',
  'Coffee Capsule',
  'Tea Bag',
  'Sugar Packet',
  'Sauce Packet',
  'Salt Packet',
  'Pepper Packet',
  'Takeaway Box',
  'Paper Cup',
  'Plastic Lid',
  'Food Wrapper',
  'Bread Clip',
  'Twist Tie',
  'Egg Carton',
  'Fruit Net',
  'Reusable Container',
  'Ice Cream Tub',
  'Yoghurt Cup',
  'Snack Container',
  'Lunch Tray',
  'Cutlery Pouch',
  'Napkin Holder',
  'Tissue Holder',
  'Menu Stand',
  'Cake Box',
  'Pizza Box',
  'Paper Plate',
  'Party Cup',
  'Balloon Pump',
  'Ribbon Curling Tool',
  'Confetti Popper',
  'Table Number',
  'Place Card',
  'Candle Holder',
  'Incense Holder',
  'Essential Oil Bottle',
  'Diffuser',
  'Room Spray',
  'Drawer Sachet',
  'Lint Brush',
  'Fabric Shaver',
  'Shoe Deodoriser',
  'Shoe Insert',
  'Insole',
  'Rain Cover',
  'Bag Hook',
  'Bag Charm',
  'Purse Hook',
  'Money Clip',
  'Coin Pouch',
  'Travel Adapter',
  'Luggage Scale',
  'Cabin Bag',
  'Garment Bag',
  'Laundry Pouch',
  'Toiletry Bag',
  'Makeup Pouch',
  'Brush Cleaner',
  'Contact Lens Case',
  'Contact Lens Bottle',
  'Pill Cutter',
  'Hot Water Bag',
  'Ice Bag',
  'Cooling Patch',
  'Eye Drop Bottle',
  'Nasal Spray',
  'Thermal Flask',
  'Hand Warmer',
  'Pocket Tissue',
  'Pocket Mirror',
  'Mini Comb',
  'Travel Brush',
  'Travel Bottle',
  'Squeeze Tube',
  'Pump Bottle',
  'Dropper Bottle',
  'Spray Nozzle',
  'Bottle Cap Opener',
  'Mini Sewing Kit',
  'Travel Lock',
  'Combination Lock',
  'Cable Lock',
  'Drawer Lock',
  'Safe Box',
  'Key Holder',
  'Key Tag',
  'Label Tag',
  'Plant Saucer',
  'Plant Stand',
  'Moss Pole',
  'Plant Pruner',
  'Soil Scoop',
  'Compost Bag',
  'Fertiliser Bottle',
  'Garden Kneeler',
  'Outdoor Mat',
  'Patio Cushion',
  'Grill Brush',
  'BBQ Tongs',
  'Charcoal Bag',
  'Cooler Box',
  'Picnic Basket',
  'Thermal Cup',
  'Reusable Plate',
  'Camping Stove',
  'Gas Canister',
  'Tent Peg',
  'Ground Sheet',
  'Dry Bag',
  'Waterproof Pouch',
  'Phone Pouch',
  'Map Case',
  'Sunscreen Stick',
  'Insect Repellent',
  'Mosquito Coil',
  'Fly Swatter',
  'Food Cover',
  'Mesh Cover',
  'Cloche',
  'Cake Dome',
  'Serving Trolley',
  'Tea Towel',
  'Dish Cloth',
  'Microfiber Cloth',
  'Absorbent Mat',
  'Sink Plug',
  'Rubber Stopper',
  'Drain Basket',
  'Soap Pump',
  'Refill Pouch',
  'Cleaning Tablet',
  'Scrub Pad',
  'Melamine Sponge',
  'Brush Head',
  'Mop Head',
  'Dust Cloth',
  'Vacuum Nozzle',
  'Lint Trap',
  'Air Freshener',
  'Scented Sachet',
  'Closet Dehumidifier',
  'Moisture Absorber',
  'Storage Jar',
  'Display Stand',
  'Remote Caddy',
  'Sofa Cover',
  'Armrest Tray',
  'Lap Desk',
  'Breakfast Tray',
  'Tablet Pillow',
  'Book Pillow',
  'Reading Stand',
  'Page Holder',
  'Cable Box',
  'Charging Station',
  'Docking Station',
  'Pen Tablet',
  'Drawing Tablet',
  'Stylus Tip',
  'Pen Refill',
  'Ink Bottle',
  'Fountain Pen',
  'Mechanical Pencil',
  'Lead Refill',
  'Eraser Cap',
  'Pencil Grip',
  'Desk Easel',
  'Mini Easel',
  'Clip Light',
  'Task Lamp',
  'Paper Weight',
  'Desktop Plant',
  'Ceramic Pot',
  'Glass Bottle',
  'Metal Straw',
  'Lunch Napkin',
  'Soup Container',
  'Thermal Jar',
  'Chopstick Rest',
  'Knife Sharpener',
  'Mandoline Slicer',
  'Julienne Peeler',
  'Melon Baller',
  'Nutcracker',
  'Seafood Cracker',
  'Tea Infuser',
  'Matcha Whisk',
  'Matcha Bowl',
  'Coffee Scoop',
  'Tamper',
  'Portafilter',
  'Milk Pitcher',
  'Drip Cone',
  'Coffee Scale',
  'Water Filter Cartridge',
  'Ice Bucket',
  'Bottle Chiller',
  'Wine Stopper',
  'Pour Spout',
  'Measuring Jug',
  'Watering Spike',
  'Window Lock',
  'Curtain Tieback',
  'Blind Cord',
  'Laundry Marker',
  'Garment Brush',
  'Suit Brush',
  'Hat Box',
  'Scarf Ring',
  'Tie Clip',
  'Cufflink Box',
  'Watch Box',
  'Ring Holder',
  'Necklace Stand',
  'Earring Card',
  'Bangle Stand',
  'Hair Roller',
  'Curling Iron',
  'Straightener',
  'Makeup Sponge',
  'Powder Puff',
  'Eyelash Curler',
  'Cotton Ball Jar',
  'Soap Saver',
  'Bath Tray',
  'Toilet Spray',
  'Bidet Spray',
  'Shower Hose',
  'Shower Filter',
  'Shower Caddy',
  'Bathrobe Hook',
  'Towel Ring',
  'Towel Rail',
  'Grab Bar',
  'Step Stool',
  'Foot File',
  'Pumice Stone',
  'Nail File',
  'Cuticle Pusher',
  'Manicure Kit',
  'Pedicure Separator',
  'Laundry Basket Label',
  'Sorting Basket',
  'Colour Catcher',
  'Dryer Sheet',
  'Lint Sheet',
  'Garment Steamer',
  'Steam Glove',
  'Pressing Cloth',
  'Clothes Brush',
  'Folding Board',
  'Packing Strap',
  'Suitcase Cover',
  'Travel Wallet',
  'Boarding Pass Holder',
  'Document Pouch',
  'Pen Loop',
  'Notebook Band',
  'Planner Sticker',
  'Habit Tracker Pad',
  'Desk Tray',
  'Pen Holder',
  'Cable Holder',
  'Sticky Tab',
  'Page Flag',
  'Mini Stapler',
  'Long Stapler',
  'Heavy Duty Stapler',
  'Staple Box',
  'Bulldog Clip',
  'Paper Fastener',
  'Legal Pad',
  'Composition Book',
  'Exam Pad',
  'Clip Folder',
  'Clear Folder',
  'Mesh Pouch',
  'Zipper Pouch',
  'Transparent Case',
  'Acrylic Box',
  'Storage Drawer',
  'Drawer Unit',
  'Desk Shelf',
  'Monitor Riser',
  'Cable Grommet',
  'Desk Clamp',
  'Clamp Light',
  'Phone Grip',
  'Pop Socket',
  'Card Sleeve',
  'Charging Brick',
  'Wall Charger',
  'Car Charger',
  'USB Hub',
  'Card Reader Adapter',
  'Bluetooth Tracker',
  'Smart Tag',
  'Portable SSD',
  'SD Card Case',
  'Camera Lens Cap',
  'Lens Filter',
  'Camera Strap',
  'Camera Bag',
  'Lens Pen',
  'Cleaning Blower',
  'Tripod Plate',
  'Gimbal',
  'Remote Shutter',
  'Photo Album',
  'Scrapbook',
  'Washi Roll',
  'Sticker Book',
  'Craft Punch',
  'Embossing Tool',
  'Glue Tape',
  'Double Sided Tape',
  'Foam Tape',
  'Mounting Putty',
  'Poster Tube',
  'Drawing Board',
  'Artist Tape',
  'Charcoal Stick',
  'Pastel Stick',
  'Paint Tube',
  'Water Cup',
  'Brush Roll',
  'Canvas Panel',
  'Apron Clip',
  'Palette Knife',
  'Calligraphy Pen',
  'Stamp Block',
  'Wax Seal',
  'Sealing Wax',
  'Letter Set',
  'Thank You Card',
  'Invitation Card',
  'Gift Tag',
  'Bow',
  'Ribbon Spool',
  'Wrapping Cutter',
  'Tape Cutter',
  'Paper Cutter',
  'Trimmer',
  'Corner Punch',
  'Laminated Card',
  'Badge Reel',
  'Office Key',
  'Cabinet Key',
  'Locker Key',
  'Locker Tag',
  'Desk Nameplate',
  'Table Clock',
  'Meeting Timer',
  'Laser Pointer',
  'Presentation Clicker',
  'Whiteboard Marker',
  'Flip Chart',
  'Flip Chart Marker',
  'Magnetic Eraser',
  'Board Magnet',
  'Projector Remote',
  'Extension Plug',
  'Cable Adapter',
  'Power Meter',
  'Desk Plug',
  'Monitor Cable',
  'VGA Cable',
  'Display Cable',
  'Network Cable',
  'Router Antenna',
  'Wi Fi Extender',
  'Door Mat',
  'Floor Mat',
  'Yoga Block',
  'Yoga Strap',
  'Exercise Ball',
  'Pilates Ring',
  'Ankle Weight',
  'Hand Grip',
  'Jump Rope',
  'Sports Cone',
  'Whistle Lanyard',
  'Score Counter',
  'Waterproof Bag',
  'Swim Kickboard',
  'Pool Noodle',
  'Arm Float',
  'Goggles Case',
  'Tennis Grip',
  'Racket Cover',
  'Ball Pump',
  'Needle Pump',
  'Bike Light',
  'Bike Bottle Cage',
  'Bike Tool',
  'Patch Kit',
  'Tire Lever',
  'Chain Lock',
  'Helmet Visor',
  'Running Belt',
  'Armband Pouch',
  'Gym Bag',
  'Shoe Bag',
  'Towel Clip',
  'Locker Padlock',
  'Sports Tape',
  'Ankle Brace',
  'Elbow Guard',
  'Mouth Guard',
  'Cap Clip',
  'Visor',
  'Sunscreen Bottle',
  'Cooling Towel',
  'Hand Fan',
  'Paper Fan',
  'Folding Fan',
  'Desk Organizer Tray'];

const DIFFICULTIES = {
  easy: { label: 'Easy', minTime: 6, maxTime: 7, rate: 0.78, pause: 760, pool: ['Chair','Mug','Fork','Wallet','Toothbrush','Backpack','Umbrella','Spoon','Plate','Bowl','Cup','Glass','Kettle','Toaster','Pillow','Blanket','Sock','Hat','Keychain','Notebook','Pen','Towel','Mirror','Clock','Phone','Book','Basket','Shoe','Soap Bar','Water Bottle','Lunch Box','Remote Control','Ruler','Scissors','Tape','Marker','Calendar','Door Mat','Cushion'] },
  normal: { label: 'Normal', minTime: 5, maxTime: 6, rate: 0.95, pause: 620, pool: null },
  hard: { label: 'Hard', minTime: 3, maxTime: 4, rate: 1.16, pause: 420, pool: ['Colander','Lint Roller','Staple Remover','Cable Organiser','Garlic Press','Shoe Horn','Mandoline Slicer','Citrus Squeezer','Cable Tie','Velcro Strap','Melon Baller','Tea Infuser','Portafilter','Packing Cube','Luggage Scale','Contact Lens Case','Cuticle Pusher','Fabric Shaver','Blind Cord','Drain Cover','Spice Rack','Splatter Guard','Dough Scraper','Piping Tip','Binder Ring','Brass Fastener','Magnetic Clip','SIM Pin','Lens Pen','Tripod Plate','Grommet','Bungee Cord','Spirit Level','Allen Key','Squeegee','Plant Mister','Garden Trowel','Moss Pole'] }
};

const STORAGE_KEY = 'shorthandSketch.v3';
const DAILY_KEY_PREFIX = 'dailyDone.';
const $ = (id) => document.getElementById(id);

const state = {
  mode: 'classic',
  difficulty: 'normal',
  roundObjects: [],
  activeIndex: 0,
  canvases: [],
  ctxs: [],
  strokes: [],
  redo: [],
  drawing: false,
  tool: 'pen',
  colour: '#283044',
  size: 5,
  timerId: null,
  remaining: 0,
  audioCtx: null,
  muted: false,
  volume: 0.55,
  stats: defaultStats()
};

function defaultStats() {
  return { gamesPlayed: 0, totalScore: 0, bestScore: 0, bestEasy: 0, bestNormal: 0, bestHard: 0, bestDaily: 0, lastDifficulty: 'normal', muted: false, volume: 0.55 };
}

function loadState() {
  try { state.stats = { ...defaultStats(), ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) }; } catch { state.stats = defaultStats(); }
  state.difficulty = state.stats.lastDifficulty || 'normal';
  state.muted = !!state.stats.muted;
  state.volume = Number.isFinite(+state.stats.volume) ? +state.stats.volume : 0.55;
}

function saveState() {
  state.stats.lastDifficulty = state.difficulty;
  state.stats.muted = state.muted;
  state.stats.volume = state.volume;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.stats));
}

function init() {
  loadState();
  bindUI();
  setupPalette();
  renderHome();
  createCanvases();
  createGuessFields();
  window.addEventListener('resize', resizeAllCanvases);
}

function bindUI() {
  $('startBtn').addEventListener('click', () => startGame());
  $('classicModeBtn').addEventListener('click', () => setMode('classic'));
  $('dailyModeBtn').addEventListener('click', () => setMode('daily'));
  document.querySelectorAll('.difficulty-card').forEach(btn => btn.addEventListener('click', () => setDifficulty(btn.dataset.difficulty)));
  $('penBtn').addEventListener('click', () => setTool('pen'));
  $('eraserBtn').addEventListener('click', () => setTool('eraser'));
  $('undoBtn').addEventListener('click', undoStroke);
  $('redoBtn').addEventListener('click', redoStroke);
  $('clearBoxBtn').addEventListener('click', () => clearCanvas(state.activeIndex));
  $('clearAllBtn').addEventListener('click', clearAllCanvases);
  $('sizeSlider').addEventListener('input', e => state.size = +e.target.value);
  $('guessForm').addEventListener('submit', e => { e.preventDefault(); checkAnswers(); });
  $('playAgainBtn').addEventListener('click', startGame);
  $('homeBtn').addEventListener('click', () => showScreen('homeScreen'));
  $('muteBtn').addEventListener('click', toggleMute);
  $('volumeSlider').addEventListener('input', e => { state.volume = +e.target.value; state.muted = state.volume === 0; saveState(); renderAudio(); });
}

function setMode(mode) { state.mode = mode; clickSound(); renderHome(); }
function setDifficulty(diff) { state.difficulty = diff; clickSound(); saveState(); renderHome(); }

function renderHome() {
  $('classicModeBtn').classList.toggle('selected', state.mode === 'classic');
  $('dailyModeBtn').classList.toggle('selected', state.mode === 'daily');
  $('difficultyPanel').style.opacity = state.mode === 'daily' ? '.5' : '1';
  document.querySelectorAll('.difficulty-card').forEach(b => b.classList.toggle('selected', b.dataset.difficulty === state.difficulty));
  $('gamesPlayed').textContent = state.stats.gamesPlayed;
  $('bestScore').textContent = state.stats.bestScore;
  $('averageScore').textContent = state.stats.gamesPlayed ? (state.stats.totalScore / state.stats.gamesPlayed).toFixed(1) : '0';
  $('dailyBest').textContent = state.stats.bestDaily;
  const done = todayCompleted();
  $('dailyDot').classList.toggle('done', done);
  $('dailyInfo').textContent = done ? "Today's Daily Challenge has already been completed. You can replay it anytime." : 'Daily Challenge: same ten objects for everyone today.';
  renderAudio();
}

function renderAudio() {
  $('muteBtn').textContent = state.muted ? '🔇' : '🔊';
  $('volumeSlider').value = state.volume;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

function setupPalette() {
  ['#283044', '#c43d5c', '#138a57', '#3a70b8', '#7d5bcf'].forEach((c, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'colour' + (i === 0 ? ' active' : ''); b.style.setProperty('--c', c); b.setAttribute('aria-label', `Select colour ${c}`);
    b.addEventListener('click', () => { state.colour = c; document.querySelectorAll('.colour').forEach(x => x.classList.remove('active')); b.classList.add('active'); clickSound(); });
    $('palette').appendChild(b);
  });
}

function createCanvases() {
  $('canvasGrid').innerHTML = '';
  state.canvases = []; state.ctxs = []; state.strokes = []; state.redo = [];
  for (let i = 0; i < 10; i++) {
    const card = document.createElement('div'); card.className = 'sketch-card'; card.dataset.index = i;
    const label = document.createElement('p'); label.className = 'sketch-label'; label.textContent = `${i + 1}`;
    const canvas = document.createElement('canvas');
    card.append(label, canvas); $('canvasGrid').appendChild(card);
    state.canvases.push(canvas); state.ctxs.push(canvas.getContext('2d')); state.strokes.push([]); state.redo.push([]);
    attachDrawing(canvas, i);
  }
  requestAnimationFrame(resizeAllCanvases);
}

function resizeAllCanvases() {
  state.canvases.forEach((canvas, i) => {
    const rect = canvas.getBoundingClientRect();
    const img = state.ctxs[i].getImageData(0, 0, Math.max(1, canvas.width), Math.max(1, canvas.height));
    canvas.width = Math.max(220, Math.round(rect.width * devicePixelRatio));
    canvas.height = Math.max(160, Math.round(rect.height * devicePixelRatio));
    const ctx = state.ctxs[i];
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    if (state.strokes[i].length) redrawCanvas(i); else { try { ctx.putImageData(img, 0, 0); } catch {} }
  });
}

function attachDrawing(canvas, index) {
  const start = e => { if (!drawingAllowed(index)) return; e.preventDefault(); state.drawing = true; state.activeIndex = index; activateCanvas(index); const p = point(e, canvas); state.currentStroke = { tool: state.tool, colour: state.colour, size: state.size, points: [p] }; drawDot(index, p); };
  const move = e => { if (!state.drawing || !state.currentStroke || state.activeIndex !== index) return; e.preventDefault(); const p = point(e, canvas); const pts = state.currentStroke.points; drawLine(index, pts[pts.length - 1], p, state.currentStroke); pts.push(p); };
  const end = () => { if (!state.drawing || !state.currentStroke || state.activeIndex !== index) return; state.drawing = false; state.strokes[index].push(state.currentStroke); state.redo[index] = []; state.currentStroke = null; };
  canvas.addEventListener('pointerdown', start);
  canvas.addEventListener('pointermove', move);
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointerleave', end);
  canvas.addEventListener('pointercancel', end);
}

function drawingAllowed(index) { return $('drawScreen').classList.contains('active') && index === state.activeIndex; }
function point(e, canvas) { const r = canvas.getBoundingClientRect(); return { x: (e.clientX - r.left) * devicePixelRatio, y: (e.clientY - r.top) * devicePixelRatio }; }
function drawDot(index, p) { const c = state.currentStroke; const ctx = state.ctxs[index]; ctx.save(); ctx.globalCompositeOperation = c.tool === 'eraser' ? 'destination-out' : 'source-over'; ctx.fillStyle = c.colour; ctx.beginPath(); ctx.arc(p.x, p.y, c.size * devicePixelRatio / 2, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
function drawLine(index, a, b, stroke) { const ctx = state.ctxs[index]; ctx.save(); ctx.globalCompositeOperation = stroke.tool === 'eraser' ? 'destination-out' : 'source-over'; ctx.strokeStyle = stroke.colour; ctx.lineWidth = stroke.size * devicePixelRatio; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); ctx.restore(); }
function redrawCanvas(index) { const ctx = state.ctxs[index]; ctx.clearRect(0,0,state.canvases[index].width,state.canvases[index].height); state.strokes[index].forEach(s => { for (let i=1;i<s.points.length;i++) drawLine(index, s.points[i-1], s.points[i], s); if (s.points.length === 1) { const old = state.currentStroke; state.currentStroke = s; drawDot(index, s.points[0]); state.currentStroke = old; } }); }
function undoStroke() { const i = state.activeIndex; const s = state.strokes[i].pop(); if (s) { state.redo[i].push(s); redrawCanvas(i); clickSound(); } }
function redoStroke() { const i = state.activeIndex; const s = state.redo[i].pop(); if (s) { state.strokes[i].push(s); redrawCanvas(i); clickSound(); } }
function clearCanvas(i) { state.strokes[i] = []; state.redo[i] = []; state.ctxs[i].clearRect(0,0,state.canvases[i].width,state.canvases[i].height); clickSound(); }
function clearAllCanvases() { for (let i=0;i<10;i++) clearCanvas(i); }
function setTool(tool) { state.tool = tool; $('penBtn').classList.toggle('active', tool === 'pen'); $('eraserBtn').classList.toggle('active', tool === 'eraser'); clickSound(); }
function activateCanvas(index) { document.querySelectorAll('.sketch-card').forEach((c,i) => c.classList.toggle('active', i === index)); $('activeBoxLabel').textContent = `Box ${index + 1}`; }

function createGuessFields() {
  $('guessGrid').innerHTML = '';
  for (let i=0;i<10;i++) {
    const row = document.createElement('label'); row.className = 'guess-item';
    row.innerHTML = `<span>${i+1}</span><input autocomplete="off" id="guess${i}" placeholder="Your answer" />`;
    $('guessGrid').appendChild(row);
  }
}

async function startGame() {
  prepareAudio(); clickSound();
  speechSynthesis.cancel();
  state.roundObjects = state.mode === 'daily' ? dailyObjects() : randomObjects();
  state.activeIndex = 0;
  clearAllCanvasesSilently();
  createGuessFields();
  await runCountdown();
  showScreen('drawScreen');
  await runDrawingPhase();
  showScreen('guessScreen');
  setTimeout(() => $('guess0').focus(), 80);
}

function clearAllCanvasesSilently() { for (let i=0;i<10;i++) { state.strokes[i]=[]; state.redo[i]=[]; if (state.ctxs[i]) state.ctxs[i].clearRect(0,0,state.canvases[i].width,state.canvases[i].height); } }

function randomObjects() {
  const diff = DIFFICULTIES[state.difficulty];
  const pool = diff.pool || OBJECTS;
  return shuffle([...new Set(pool)]).slice(0,10);
}

function dailyObjects() {
  const date = dateKey();
  let seed = 0; for (const ch of date) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  return seededShuffle([...new Set(OBJECTS)], seed).slice(0,10);
}
function dateKey() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function todayCompleted() { return localStorage.getItem(DAILY_KEY_PREFIX + dateKey()) === 'yes'; }
function shuffle(arr) { for (let i=arr.length-1;i>0;i--) { const j = Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }
function seededShuffle(arr, seed) { const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; for (let i=arr.length-1;i>0;i--) { const j = Math.floor(rand()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }

async function runCountdown() {
  showScreen('countdownScreen');
  for (const item of ['3','2','1','GO']) {
    $('countdownText').textContent = item;
    $('countdownText').style.animation = 'none'; void $('countdownText').offsetWidth; $('countdownText').style.animation = '';
    beep(item === 'GO' ? 660 : 420, .08, 'sine');
    await wait(720);
  }
}

async function runDrawingPhase() {
  const diff = state.mode === 'daily' ? DIFFICULTIES.normal : DIFFICULTIES[state.difficulty];
  for (let i=0;i<10;i++) {
    state.activeIndex = i; activateCanvas(i);
    $('roundLabel').textContent = `${i+1} / 10`;
    $('announceText').textContent = `Listen: number ${i+1}`;
    await speak(`Number ${i+1}. ${state.roundObjects[i]}.`, diff.rate);
    $('announceText').textContent = `Sketch box ${i+1} now`;
    await timedDraw(randomBetween(diff.minTime, diff.maxTime));
    await wait(diff.pause);
  }
  roundCompleteSound();
}

function timedDraw(seconds) {
  return new Promise(resolve => {
    state.remaining = seconds;
    updateTimer();
    clearInterval(state.timerId);
    state.timerId = setInterval(() => {
      state.remaining -= 0.1;
      updateTimer();
      if (state.remaining <= 0) { clearInterval(state.timerId); $('timerLabel').textContent = '0.0s'; resolve(); }
    }, 100);
  });
}
function updateTimer() { $('timerLabel').textContent = `${Math.max(0,state.remaining).toFixed(1)}s`; }
function randomBetween(a,b) { return a + Math.random() * (b-a); }
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

function speak(text, rate) {
  return new Promise(resolve => {
    if (!('speechSynthesis' in window)) { setTimeout(resolve, 900); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = rate; u.pitch = 1.05; u.volume = state.muted ? 0 : state.volume;
    u.onend = resolve; u.onerror = resolve;
    speechSynthesis.speak(u);
    setTimeout(resolve, 2600); // safety fallback for browsers that do not fire onend reliably
  });
}

function normalise(s) {
  return String(s || '').toLowerCase().trim()
    .replace(/&/g, 'and').replace(/ipad/g, 'tablet').replace(/iphone/g, 'phone')
    .replace(/[-_]/g, ' ').replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ')
    .replace(/tooth brush/g, 'toothbrush').replace(/sun glasses/g, 'sunglasses').replace(/remote control/g, 'remotecontrol')
    .replace(/organizer/g, 'organiser').replace(/colour/g, 'color');
}
function singularise(s) { return s.replace(/ies\b/g,'y').replace(/s\b/g,''); }
function isCorrect(answer, target) {
  const a = singularise(normalise(answer));
  const t = singularise(normalise(target));
  if (!a) return false;
  if (a === t || a.includes(t) || t.includes(a)) return true;
  return levenshtein(a,t) <= (t.length <= 6 ? 1 : 2);
}
function levenshtein(a,b) { const dp = Array.from({length:a.length+1},(_,i)=>[i]); for(let j=1;j<=b.length;j++) dp[0][j]=j; for(let i=1;i<=a.length;i++) for(let j=1;j<=b.length;j++) dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1)); return dp[a.length][b.length]; }

function checkAnswers() {
  const answers = state.roundObjects.map((obj, i) => ({ obj, answer: $(`guess${i}`).value, ok: isCorrect($(`guess${i}`).value, obj) }));
  const score = answers.filter(a => a.ok).length;
  updateStats(score);
  showResults(score, answers);
}

function updateStats(score) {
  state.stats.gamesPlayed++;
  state.stats.totalScore += score;
  state.stats.bestScore = Math.max(state.stats.bestScore, score);
  if (state.mode === 'daily') {
    state.stats.bestDaily = Math.max(state.stats.bestDaily, score);
    localStorage.setItem(DAILY_KEY_PREFIX + dateKey(), 'yes');
  } else {
    const key = state.difficulty === 'easy' ? 'bestEasy' : state.difficulty === 'hard' ? 'bestHard' : 'bestNormal';
    state.stats[key] = Math.max(state.stats[key], score);
  }
  saveState(); renderHome();
}

function showResults(score, answers) {
  const pct = Math.round(score * 10);
  $('scoreText').textContent = `${score}/10`;
  $('percentText').textContent = `${pct}%`;
  const title = score >= 9 ? 'Memory Master' : score >= 7 ? 'Fantastic Recall' : score >= 5 ? 'Almost There' : 'Keep Sketching';
  $('resultTitle').textContent = title;
  $('resultMessage').textContent = score >= 8 ? 'Your shorthand brain is clearly switched on.' : score >= 5 ? 'A few sketches fooled you, but your recall is warming up.' : 'Quick doodles are tricky. Replay and your symbols will get sharper.';
  $('answersList').innerHTML = '';
  answers.forEach((r, i) => {
    const row = document.createElement('div'); row.className = 'answer-row';
    row.innerHTML = `<strong>${i+1}</strong><div><small>Correct answer</small>${escapeHtml(r.obj)}</div><div class="player-answer"><small>Your answer</small>${escapeHtml(r.answer || '—')}</div><div class="${r.ok ? 'ok' : 'no'}">${r.ok ? '✓' : '✕'}</div>`;
    $('answersList').appendChild(row);
  });
  showScreen('resultsScreen');
  score >= 7 ? celebrationSound() : roundCompleteSound();
}
function escapeHtml(s) { return String(s).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch])); }

function prepareAudio() { if (!state.audioCtx) state.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); if (state.audioCtx.state === 'suspended') state.audioCtx.resume(); }
function beep(freq=440, duration=.07, type='triangle') { if (state.muted || !state.audioCtx || state.volume <= 0) return; const ctx=state.audioCtx, osc=ctx.createOscillator(), gain=ctx.createGain(); osc.type=type; osc.frequency.value=freq; gain.gain.setValueAtTime(0.0001, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(state.volume*0.18, ctx.currentTime+.01); gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime+duration); osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime+duration+.02); }
function clickSound() { prepareAudio(); beep(520,.045,'triangle'); }
function roundCompleteSound() { [520,660,780].forEach((f,i)=>setTimeout(()=>beep(f,.08,'sine'),i*95)); }
function celebrationSound() { [560,700,880,1050].forEach((f,i)=>setTimeout(()=>beep(f,.09,'sine'),i*85)); }
function toggleMute() { state.muted = !state.muted; if (!state.muted && state.volume === 0) state.volume = .45; saveState(); renderAudio(); clickSound(); }

init();
