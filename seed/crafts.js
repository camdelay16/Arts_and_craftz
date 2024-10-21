const db = require('../db')
const { Type, Craft } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const paintDraw = await Type.findOne({ craftType: `Painting and Drawing` })
    const sculpture = await Type.findOne({ craftType: `Sculpture` })
    const textiles = await Type.findOne({ craftType: `Textiles` })
    const paperCrafts = await Type.findOne({ craftType: `Paper Crafts` })
    const jewelry = await Type.findOne({ craftType: `Jewelry Making` })
    const homeDecor = await Type.findOne({ craftType: `Home Décor` })
    const witchcraft = await Type.findOne({ craftType: `Witchcraft` })

    const crafts = [
        {
            craftName: "Sunset Watercolor Painting",
            craftType_id: paintDraw._id,
            tagline: "Create a beautiful sunset scene using watercolors!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/et7EtBz.jpeg",
            forKids: true,
            description: "This project guides you through creating a stunning sunset painting using watercolor techniques. Perfect for beginners and a fun activity for kids!",
            materials: [
                { amount: 1, unit: "set", item: "Watercolor paint set" },
                { amount: 1, unit: "pad", item: "Watercolor paper (A4)" },
                { amount: 1, unit: "brush", item: "Watercolor brush (round)" },
                { amount: 1, unit: "cup", item: "Water container" },
                { amount: 1, unit: "towel", item: "Paper towel or cloth" }
            ],
            directions: [
                { step: 1, stepImg: "", direction: "Gather all materials on a clean surface." },
                { step: 2, stepImg: "https://i.imgur.com/xev7Em0.jpeg", direction: "Wet the watercolor paper with clean water using a brush." },
                { step: 3, stepImg: "", direction: "Apply yellow and orange paints to create the sunset sky." },
                { step: 4, stepImg: "https://i.imgur.com/XnIqpek.jpeg", direction: "Blend the colors with a wet brush for a smooth sunset effect." },
                { step: 5, stepImg: "", direction: "Let the painting dry and enjoy your artistic creation!" }
            ],
            youtubeLink: "",
            craftReviews: [
                { reviewer: "Alice", rating: 5, review: "I loved this project! It was easy to follow and the results were stunning." },
                { reviewer: "Bob", rating: 4, review: "Great tutorial! I had fun, but blending the colors was a bit tricky." }
            ]
        },
        {
            craftName: "Starry Night Canvas",
            craftType_id: paintDraw._id,
            tagline: "Recreate a masterpiece inspired by Van Gogh!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/xiFwtbL.jpeg",
            forKids: true,
            description: "This project guides you through painting your version of the famous 'Starry Night'. Explore vibrant colors and swirling skies!",
            materials: [
                { amount: 1, unit: "canvas", item: "Canvas (16x20 inches)" },
                { amount: 1, unit: "set", item: "Acrylic paint set" },
                { amount: 1, unit: "brush", item: "Flat paintbrush" },
                { amount: 1, unit: "brush", item: "Round paintbrush" },
                { amount: 1, unit: "palette", item: "Palette" }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Sketch the outline of the landscape on the canvas."
                },
                {
                    step: 2,
                    stepImg: "https://i.imgur.com/3Kcm6el.jpeg",
                    direction: "Start with the background, using blues and whites for the sky."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Add yellow and white for the stars and moon, making them bright."
                },
                {
                    step: 4,
                    stepImg: "https://i.imgur.com/mNMI4A4.jpeg",
                    direction: "Use a swirling technique to create movement in the sky."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Finish with details in the foreground using darker colors."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Charlie",
                    rating: 5,
                    review: "Such a fun activity! Easy to follow and looks great!"
                },
                {
                    reviewer: "Dana",
                    rating: 4,
                    review: "Loved creating this, but it took longer than I expected."
                }
            ]
        },
        {
            craftName: "Abstract Geometric Painting",
            craftType_id: paintDraw._id,
            tagline: "Express yourself with bold shapes and colors!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/QrYkuBL.jpeg",
            forKids: true,
            description: "Get creative with shapes and colors! This project helps you create a vibrant abstract painting using geometric designs.",
            materials: [
                {
                    amount: 1,
                    unit: "canvas",
                    item: "Canvas (12x16 inches)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Acrylic paint set"
                },
                {
                    amount: 1,
                    unit: "brush",
                    item: "Flat paintbrush"
                },
                {
                    amount: 1,
                    unit: "palette",
                    item: "Palette"
                },
                {
                    amount: 1,
                    unit: "pencil",
                    item: "Pencil for sketching"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "https://i.imgur.com/z7au2G8.jpeg",
                    direction: "Sketch various geometric shapes on the canvas."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Choose your color palette and start filling in the shapes."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Mix colors for gradients and apply to the canvas."
                },
                {
                    step: 4,
                    stepImg: "https://i.imgur.com/7tpOhaW.jpeg",
                    direction: "Add borders with contrasting colors for definition."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Let it dry and hang it up for display!"
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Eve",
                    rating: 5,
                    review: "So much fun! I love how it turned out!"
                },
                {
                    reviewer: "Frank",
                    rating: 4,
                    review: "Good project but could use clearer instructions."
                }
            ]
        },
        {
            craftName: "Watercolor Flowers",
            craftType_id: paintDraw._id,
            tagline: "Create beautiful flower art using watercolor techniques.",
            difficulty: "Easy",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/nAdswDS.jpeg",
            forKids: true,
            description: "Learn to paint delicate flowers with watercolor techniques in this charming project. Perfect for all skill levels!",
            materials: [
                {
                    amount: 1,
                    unit: "set",
                    item: "Watercolor paint set"
                },
                {
                    amount: 1,
                    unit: "pad",
                    item: "Watercolor paper (A5)"
                },
                {
                    amount: 1,
                    unit: "brush",
                    item: "Watercolor brush (round)"
                },
                {
                    amount: 1,
                    unit: "cup",
                    item: "Water container"
                },
                {
                    amount: 1,
                    unit: "towel",
                    item: "Paper towel or cloth"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Sketch light outlines of various flowers on watercolor paper."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Wet your brush and start with lighter paint colors, filling in the petals."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Layer additional colors for depth as the first layer dries."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Add details such as leaves and stems using a finer brush."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Let the painting dry and display your beautiful floral art!"
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Grace",
                    rating: 5,
                    review: "This was so relaxing and enjoyable! The flowers turned out lovely."
                },
                {
                    reviewer: "Henry",
                    rating: 4,
                    review: "Nice project! I struggled with the blending, but it was a great learning experience."
                }
            ]
        },
        {
            craftName: "Canvas Quote Painting",
            craftType_id: paintDraw._id,
            tagline: "Personalize your space with your favorite quotes!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/9L5djaj.jpeg",
            forKids: true,
            description: "Create a beautiful canvas artwork featuring your favorite quote, using fun colors and artistic lettering.",
            materials: [
                {
                    amount: 1,
                    unit: "canvas",
                    item: "Canvas (12x12 inches)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Acrylic paint set"
                },
                {
                    amount: 1,
                    unit: "brush",
                    item: "Flat paintbrush"
                },
                {
                    amount: 1,
                    unit: "pencil",
                    item: "Pencil for sketching"
                },
                {
                    amount: 1,
                    unit: "marker",
                    item: "Black permanent marker"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Choose a quote and lightly sketch it on the canvas with a pencil."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Fill in the background with a color of your choice using the flat brush."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Once dry, outline the quote with the black permanent marker."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Add decorative elements around the quote, such as flowers or geometric shapes."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Let it all dry, then hang it on your wall for inspiration!"
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Isla",
                    rating: 5,
                    review: "I loved this project! It made my room feel more personal."
                },
                {
                    reviewer: "Jack",
                    rating: 4,
                    review: "Great idea! I enjoyed painting but wish I had more colors."
                }
            ]
        },
        {
            craftName: "DIY Mandala Art",
            craftType_id: paintDraw._id,
            tagline: "Create intricate mandala patterns with ease!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/ft6sYIg.jpeg",
            forKids: true,
            description: "Explore the world of mandalas by creating your own stunning designs! This project combines drawing and painting techniques.",
            materials: [
                {
                    amount: 1,
                    unit: "sheet",
                    item: "Heavyweight drawing paper"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Fine-tip markers"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Acrylic paint set"
                },
                {
                    amount: 1,
                    unit: "brush",
                    item: "Round paintbrush"
                },
                {
                    amount: 1,
                    unit: "palette",
                    item: "Palette for mixing colors"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Draw a circle in the center of your paper to start your mandala."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Use a ruler or compass to create evenly spaced rings around the circle."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Begin filling different sections with patterns using the fine-tip markers."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Select a color palette and paint the mandala sections with acrylic paint."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Allow the painting to dry and display your unique mandala art!"
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Liam",
                    rating: 5,
                    review: "I had a wonderful time creating this mandala! It was rewarding and calming."
                },
                {
                    reviewer: "Mia",
                    rating: 4,
                    review: "Great instructions! I enjoyed coloring but found the patterns a bit challenging."
                }
            ]
        },
        {
            craftName: "Clay Miniature Animals",
            craftType_id: sculpture._id,
            tagline: "Create adorable animal figures using air-dry clay!",
            difficulty: "Easy",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/HosnjNj.jpeg",
            forKids: true,
            description: "This fun project allows you to sculpt charming miniatures of your favorite animals using air-dry clay. Perfect for kids and beginners!",
            materials: [
                {
                    amount: 1,
                    unit: "pack",
                    item: "Air-dry clay (various colors)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Clay sculpting tools"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Acrylic paint set"
                },
                {
                    amount: 1,
                    unit: "paintbrush",
                    item: "Small paintbrush"
                },
                {
                    amount: 1,
                    unit: "water",
                    item: "Cup of water for smoothing"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Choose your favorite animal and gather reference images."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Shape pieces of clay into body parts (head, body, legs) and attach them."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Use tools to add details such as eyes and texture to the fur."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Allow the sculptures to dry completely as per the clay instructions."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Once dry, paint your animals with acrylic paints for added color."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Oliver",
                    rating: 5,
                    review: "Such a fun and easy project! I loved making my little animals."
                },
                {
                    reviewer: "Ava",
                    rating: 4,
                    review: "Great idea! It took patience, but the end results were worth it."
                }
            ]
        },
        {
            craftName: "Homemade Birdhouse",
            craftType_id: sculpture._id,
            tagline: "Build a cozy home for your feathered friends!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/N46QZLf.jpeg",
            forKids: true,
            description: "Construct a simple birdhouse using wood pieces or biodegradable materials. This project helps promote nature conservation!",
            materials: [
                {
                    amount: 1,
                    unit: "set",
                    item: "Wooden pieces (pre-cut for easier assembly)"
                },
                {
                    amount: 1,
                    unit: "box",
                    item: "Wood glue or screws"
                },
                {
                    amount: 1,
                    unit: "paint",
                    item: "Outdoor paint or sealer"
                },
                {
                    amount: 1,
                    unit: "brush",
                    item: "Paintbrush"
                },
                {
                    amount: 1,
                    unit: "sandpaper",
                    item: "Sandpaper for smoothing edges"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Assemble the wooden pieces according to the provided instructions."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Use wood glue to secure the joints or screws for a stronger hold."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Sand any rough edges to ensure safety for the birds."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Paint the birdhouse with outdoor paint for protection and decoration."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Allow the paint to dry, then hang the birdhouse in a suitable location."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Elijah",
                    rating: 5,
                    review: "This was a wonderful project! My kids loved painting it."
                },
                {
                    reviewer: "Sofia",
                    rating: 4,
                    review: "Fun and rewarding, but a bit tricky to assemble without help."
                }
            ]
        },
        {
            craftName: "Garden Stone Decor",
            craftType_id: sculpture._id,
            tagline: "Transform ordinary stones into beautiful garden decorations!",
            difficulty: "Easy",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/ezZM2uK.jpeg",
            forKids: true,
            description: "Get creative by painting and decorating stones for your garden! This fun and rewarding project adds a personal touch to outdoor spaces.",
            materials: [
                {
                    amount: 5,
                    unit: "stones",
                    item: "Smooth stones (various sizes)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Acrylic paint set"
                },
                {
                    amount: 1,
                    unit: "brush",
                    item: "Paintbrush"
                },
                {
                    amount: 1,
                    unit: "marker",
                    item: "Permanent markers for detailing"
                },
                {
                    amount: 1,
                    unit: "sealant",
                    item: "Outdoor sealant spray"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Clean the stones to remove dirt and debris, then let them dry."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Sketch your designs lightly on the stone with a pencil."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Use acrylic paint to fill in the designs. Feel free to use multiple colors!"
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Add details with permanent markers once the paint is dry."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Spray a coat of outdoor sealant to protect your artwork from the elements."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "James",
                    rating: 5,
                    review: "This was a delightful project! My garden looks so cheerful now."
                },
                {
                    reviewer: "Lily",
                    rating: 4,
                    review: "Really enjoyable! I had some issues with the paint chipping off."
                }
            ]
        },
        {
            craftName: "Paper Mache Animal Sculptures",
            craftType_id: sculpture._id,
            tagline: "Bring your favorite animals to life with paper mache!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/NcSkhbc.jpeg",
            forKids: true,
            description: "Create fun and colorful animal sculptures using the paper mache technique. This project is excellent for developing creativity and motor skills.",
            materials: [
                {
                    amount: 1,
                    unit: "roll",
                    item: "Newspaper or old magazines"
                },
                {
                    amount: 1,
                    unit: "flour",
                    item: "Flour for paste (1 cup)"
                },
                {
                    amount: 1,
                    unit: "water",
                    item: "Water for paste (1 cup)"
                },
                {
                    amount: 1,
                    unit: "balloon",
                    item: "Balloon (as a base for the sculpture)"
                },
                {
                    amount: 1,
                    unit: "paint",
                    item: "Acrylic paint for decorating"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Prepare the paper mache paste by mixing flour and water."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Tear the newspaper into strips and dip them into the paste."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Cover the balloon (or chosen base) with the damp newspaper strips, layering for strength."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Allow the sculpture to dry completely before popping the balloon."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Once dry, paint your sculpture with colorful designs and let dry again."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Sophia",
                    rating: 5,
                    review: "This was so much fun! I made a giant turtle and I love it!"
                },
                {
                    reviewer: "Mason",
                    rating: 4,
                    review: "Great project! It took a while but totally worth it."
                }
            ]
        },
        {
            craftName: "Salt Dough Ornaments",
            craftType_id: sculpture._id,
            tagline: "Make festive ornaments using simple salt dough!",
            difficulty: "Easy",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/YniUWCE.jpeg",
            forKids: true,
            description: "Create beautiful and personalized ornaments or decorations using homemade salt dough. Perfect for holidays or special occasions!",
            materials: [
                {
                    amount: 2,
                    unit: "cups",
                    item: "All-purpose flour"
                },
                {
                    amount: 1,
                    unit: "cup",
                    item: "Salt"
                },
                {
                    amount: 1,
                    unit: "cup",
                    item: "Water"
                },
                {
                    amount: 1,
                    unit: "baking sheet",
                    item: "Baking sheet for drying"
                },
                {
                    amount: 1,
                    unit: "paint",
                    item: "Acrylic paint for decorating"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Mix flour, salt, and water in a bowl to form a dough."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Knead the dough until it's smooth and pliable."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Roll out the dough to about 1/4 inch thickness and cut shapes using cookie cutters."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Make a small hole at the top of each shape for hanging after baking."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Bake in a preheated oven at 200°F (93°C) for 2-3 hours until hard."
                },
                {
                    step: 6,
                    stepImg: "",
                    direction: "Once cool, paint your ornaments and let them dry completely."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Emma",
                    rating: 5,
                    review: "Such an easy and fun project! Perfect for holiday gifts!"
                },
                {
                    reviewer: "Lucas",
                    rating: 4,
                    review: "Great activity! The painting was my favorite part."
                }
            ]
        },
        {
            craftName: "Knitted Scarf",
            craftType_id: textiles._id,
            tagline: "Stay warm and stylish with your handmade scarf!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/nOsLpRr.jpeg",
            forKids: false,
            description: "Learn how to knit a cozy scarf using basic knitting techniques. This project is great for beginners and a perfect gift for family and friends!",
            materials: [
                {
                    amount: 2,
                    unit: "balls",
                    item: "Yarn (medium weight)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Knitting needles (size 8 or 9)"
                },
                {
                    amount: 1,
                    unit: "scissors",
                    item: "Scissors for cutting yarn"
                },
                {
                    amount: 1,
                    unit: "tapestry needle",
                    item: "Tapestry needle for weaving in ends"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Cast on 30 stitches (or as many as desired for width) onto your knitting needle."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Knit every row (Garter Stitch) until the scarf reaches your desired length, about 60 inches."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Bind off the stitches to finish the end of the scarf."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Cut the yarn, leaving a tail to weave in, and use the tapestry needle to weave in loose ends."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Block the scarf if desired, and enjoy your warm, cozy creation!"
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Sophia",
                    rating: 5,
                    review: "Absolutely loved this project! My scarf turned out beautiful."
                },
                {
                    reviewer: "Jackson",
                    rating: 4,
                    review: "Great instructions! It was my first time knitting and it was fun."
                }
            ]
        },
        {
            craftName: "DIY Tie-Dye T-Shirt",
            craftType_id: textiles._id,
            tagline: "Create vibrant patterns on your favorite t-shirt!",
            difficulty: "Easy",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/YriZzmB.jpeg",
            forKids: true,
            description: "This colorful project allows you to tie-dye a plain t-shirt, perfect for summer festivals or casual wear! It’s an engaging activity for kids and adults alike.",
            materials: [
                {
                    amount: 1,
                    unit: "t-shirt",
                    item: "Plain white cotton t-shirt"
                },
                {
                    amount: 5,
                    unit: "bottles",
                    item: "Fabric dye (various colors)"
                },
                {
                    amount: 1,
                    unit: "squeeze bottle",
                    item: "Squeeze bottles for dye application"
                },
                {
                    amount: 1,
                    unit: "gloves",
                    item: "Disposable gloves for hands"
                },
                {
                    amount: 1,
                    unit: "plastic sheet",
                    item: "Plastic table cover or garbage bags to protect surfaces"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Prepare your workspace by covering the area with plastic to avoid staining."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Twist, fold, or pinch areas of the t-shirt to create your desired patterns, securing with rubber bands."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Mix fabric dye according to the package instructions and fill squeeze bottles."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Apply dye to the different sections of the shirt, using various colors as desired."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Let the dye set according to the instructions on the dye package, then rinse it out and allow to dry."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Emily",
                    rating: 5,
                    review: "This was such a fun project! My t-shirt turned out amazing!"
                },
                {
                    reviewer: "Oliver",
                    rating: 4,
                    review: "A great activity"
                }
            ]
        },
        {
            craftName: "Simple Quilted Coasters",
            craftType_id: textiles._id,
            tagline: "Protect your surfaces with stylish coasters!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/nZo9oC3.jpeg",
            forKids: false,
            description: "Create beautiful quilted coasters using leftover fabric scraps. This project is a great way to practice basic sewing skills while making functional art for your home.",
            materials: [
                {
                    amount: 4,
                    unit: "squares",
                    item: "Fabric squares (10x10 inches, various colors/patterns)"
                },
                {
                    amount: 1,
                    unit: "batting",
                    item: "Cotton batting (10x10 inches)"
                },
                {
                    amount: 1,
                    unit: "thread",
                    item: "Coordinating sewing thread"
                },
                {
                    amount: 1,
                    unit: "scissors",
                    item: "Fabric scissors"
                },
                {
                    amount: 1,
                    unit: "sewing machine",
                    item: "Sewing machine or needle for hand sewing"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Layer two fabric squares with the right sides facing together and place a square of batting in between."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Sew around the edges, leaving a small opening for turning it inside out."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Turn the coaster right side out and press flat with an iron."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Quilt the coaster by sewing a grid or X pattern to hold the layers together."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Repeat the process for additional coasters in various colors."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Mia",
                    rating: 5,
                    review: "What a fun and quick project! I made a whole set of coasters."
                },
                {
                    reviewer: "Ethan",
                    rating: 4,
                    review: "Great instructions, but I found it a bit tricky to sew the corners."
                }
            ]
        },
        {
            craftName: "Hand-Embroidered Weaving Wall Hanging",
            craftType_id: textiles._id,
            tagline: "Create a stunning wall decor piece with embroidery!",
            difficulty: "Hard",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/abupvB7.jpeg",
            forKids: false,
            description: "Design and create a beautiful woven wall hanging with embroidered elements. This project allows for creativity in both weaving and embroidery techniques.",
            materials: [
                {
                    amount: 1,
                    unit: "loom",
                    item: "Weaving loom or homemade cardboard loom"
                },
                {
                    amount: 1,
                    unit: "yarn",
                    item: "Various colors of yarn for weaving"
                },
                {
                    amount: 1,
                    unit: "fabric",
                    item: "Cotton fabric for backing"
                },
                {
                    amount: 1,
                    unit: "embroidery thread",
                    item: "Embroidery thread in various colors"
                },
                {
                    amount: 1,
                    unit: "scissors",
                    item: "Fabric scissors"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Set up your loom and choose your yarn colors for weaving."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Weave the yarn securely in and out through the loom until you have your desired height."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Once woven, carefully remove from the loom and trim the ends."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Attach the woven piece to a cotton backing and use embroidery thread to add decorative stitches."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Finish by adding a wooden dowel or branch at the top for hanging."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Olivia",
                    rating: 5,
                    review: "This was a challenging yet rewarding project! It looks lovely on my wall."
                }]
        },
        {
            craftName: "Handmade Greeting Cards",
            craftType_id: paperCrafts._id,
            tagline: "Create personalized greeting cards for every occasion!",
            difficulty: "Easy",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/1I4YLsY.jpeg",
            forKids: true,
            description: "Make beautiful and thoughtful greeting cards for birthdays, holidays, or just to say hello! This project encourages creativity and personalization.",
            materials: [
                {
                    amount: 5,
                    unit: "sheets",
                    item: "Cardstock (various colors)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Colored markers or gel pens"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Stamps and ink pad"
                },
                {
                    amount: 1,
                    unit: "glue",
                    item: "Adhesive or glue stick"
                },
                {
                    amount: 1,
                    unit: "decorative",
                    item: "Decorative paper or embellishments (stickers, ribbons, etc.)"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Cut the cardstock into desired sizes, typically 5x7 inches for a standard card."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Fold the cardstock in half to create the card base."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Use markers or stamps to decorate the front of the card with designs or messages."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Add embellishments such as stickers or ribbons for added flair."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: `Write a personal message inside the card and it's ready to give!`
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Liam",
                    rating: 5,
                    review: "I had so much fun making cards! They turned out beautiful."
                },
                {
                    reviewer: "Emma",
                    rating: 4,
                    review: "Simple instructions! I loved customizing each card for my friends."
                }
            ]
        },
        {
            craftName: "Origami Paper Cranes",
            craftType_id: paperCrafts._id,
            tagline: "Fold beautiful paper cranes as a symbol of peace!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/KnZnw6G.jpeg",
            forKids: true,
            description: "Learn the traditional art of origami by folding paper cranes! This craft is not only fun but also a meaningful symbol of hope and good luck.",
            materials: [
                {
                    amount: 10,
                    unit: "sheets",
                    item: "Origami paper (various colors)"
                },
                {
                    amount: 1,
                    unit: "book",
                    item: "Origami instructions book or printed instructions"
                },
                {
                    amount: 1,
                    unit: "markers",
                    item: "Markers for decoration (optional)"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Start with a square piece of origami paper with the colored side down."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Fold the paper in half diagonally to form a triangle, then unfold."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Fold the top triangle down to the center crease to form a kite shape."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Fold the sides into the center, then flip the paper and repeat on the other side."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Open and pull the wings apart to complete your crane! Personalize with markers if desired."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Noah",
                    rating: 5,
                    review: "Loved folding cranes! Made a whole flock for my room."
                },
                {
                    reviewer: "Ava",
                    rating: 4,
                    review: "Fun project, but it took a few tries to get it right!"
                }
            ]
        },
        {
            craftName: "Paper Mache Bowl",
            craftType_id: paperCrafts._id,
            tagline: "Craft a unique bowl using paper mache techniques!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/SbiemcV.jpeg",
            forKids: true,
            description: "Create a beautiful and functional bowl using the classic paper mache technique. This project allows for creativity and can be used to store small items.",
            materials: [
                {
                    amount: 1,
                    unit: "roll",
                    item: "Newspaper or old magazines"
                },
                {
                    amount: 1,
                    unit: "flour",
                    item: "Flour (1 cup)"
                },
                {
                    amount: 1,
                    unit: "water",
                    item: "Water (1 cup)"
                },
                {
                    amount: 1,
                    unit: "balloon",
                    item: "Balloon (as a form for the bowl)"
                },
                {
                    amount: 1,
                    unit: "paint",
                    item: "Acrylic paint for decorating"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Prepare the paper mache paste by mixing flour and water in a bowl until smooth."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Tear the newspaper into strips, about 1 inch wide and dip them into the paste."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Cover the balloon with the dipped newspaper strips in overlapping layers, leaving an opening at the top."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Allow the first layer to dry completely, then add 1-2 more layers for strength."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Once dry, pop the balloon and remove it from the paper mache bowl. Trim the edges if necessary."
                },
                {
                    step: 6,
                    stepImg: "",
                    direction: "Paint your bowl with acrylic paint and let it dry before using it for storage!"
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Sophia",
                    rating: 5,
                    review: "This was a fun project! I love how my bowl turned out, and it's great for holding small treasures."
                },
                {
                    reviewer: "Jackson",
                    rating: 4,
                    review: "Great craft! Just make sure to give it enough time to dry thoroughly."
                }
            ]
        },
        {
            craftName: "Beaded Bracelet",
            craftType_id: jewelry._id,
            tagline: "Create a beautiful custom beaded bracelet!",
            difficulty: "Easy",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/hC7SQxO.jpeg",
            forKids: true,
            description: "Design and make your own beaded bracelet using colorful beads and stretchy cord. This project is perfect for beginners and is a fun way to express your style!",
            materials: [
                {
                    amount: 1,
                    unit: "spool",
                    item: "Stretchy jewelry cord (about 1mm thickness)"
                },
                {
                    amount: 1,
                    unit: "box",
                    item: "Variety of colorful beads (glass, wooden, etc.)"
                },
                {
                    amount: 1,
                    unit: "scissors",
                    item: "Scissors for cutting the cord"
                },
                {
                    amount: 1,
                    unit: "ruler",
                    item: "Ruler for measuring length"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Measure and cut a piece of stretchy cord about 10 inches long, allowing some extra for tying."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Select your desired beads and arrange them in a pattern on a flat surface."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "String the beads onto the cord until you reach your desired length."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Tie a knot at the ends of the cord to secure the beads, then trim any excess cord."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Wear your bracelet or gift it to someone special!"
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Ella",
                    rating: 5,
                    review: "This was so easy and fun! I made matching bracelets for my friends."
                },
                {
                    reviewer: "Liam",
                    rating: 4,
                    review: "Great project for beginners! I enjoyed picking out my beads."
                }
            ]
        },
        {
            craftName: "Wire Wrapped Rings",
            craftType_id: jewelry._id,
            tagline: "Make unique and stylish wire wrapped rings!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/ImqgCDw.jpeg",
            forKids: false,
            description: "Get creative with wire and beads to create custom wire wrapped rings. This project is a great way to develop jewelry-making skills while making beautiful accessories!",
            materials: [
                {
                    amount: 1,
                    unit: "coil",
                    item: "Jewelry wire (22 or 24 gauge)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Beads of choice (semi-precious stones, glass beads, etc.)"
                },
                {
                    amount: 1,
                    unit: "tool",
                    item: "Wire cutters"
                },
                {
                    amount: 1,
                    unit: "tool",
                    item: "Round-nose pliers"
                },
                {
                    amount: 1,
                    unit: "tool",
                    item: "Flat-nose pliers"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Cut a 10-12 inch piece of wire, depending on your ring size."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Create a loop at one end of the wire using round-nose pliers."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "String a bead onto the wire and use the flat-nose pliers to wrap the wire around the bead's base."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Continue wrapping the wire around the bead and then form the ring by shaping it around a ring mandrel or a pencil."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Secure the end of the wire and trim any excess before wearing your ring!"
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Ava",
                    rating: 5,
                    review: "I loved how these turned out! They make great gifts."
                },
                {
                    reviewer: "Owen",
                    rating: 4,
                    review: "I had a bit of trouble wrapping the wire..."
                }]
        },
        {
            craftName: "Advanced Charm Necklace",
            craftType_id: jewelry._id,
            tagline: "Craft a stunning charm necklace with intricate design and personalized charms!",
            difficulty: "Hard",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/J2utlWL.jpeg",
            forKids: false,
            description: "Create an exquisite charm necklace using multiple layers of chains, intricate charms, and advanced jewelry making techniques. Perfect for experienced crafters looking to enhance their jewelry collection!",
            materials: [
                {
                    amount: 1,
                    unit: "set",
                    item: "Multiple necklace chains (various lengths and styles)"
                },
                {
                    amount: 7,
                    unit: "charms",
                    item: "Assorted charms (metal, acrylic, and glass)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Jump rings (various sizes)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Clasp (lobster or toggle clasp)"
                },
                {
                    amount: 1,
                    unit: "tool",
                    item: "Chain nose pliers"
                },
                {
                    amount: 1,
                    unit: "tool",
                    item: "Wire cutters"
                },
                {
                    amount: 1,
                    unit: "tool",
                    item: "Beading wire (26-gauge or similar)"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Select multiple chains of varying lengths and arrange them in layers to decide your necklace design."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Using chain nose pliers, attach the clasp to one end of the longest chain."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Use jump rings to attach charms to each layer of the chain, spacing them evenly for a balanced look."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Cut lengths of the beading wire to create additional charms or clusters, then secure them to the chains."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Once all charms and clusters are attached, add the clasp at the other end and ensure all jump rings are closed securely."
                },
                {
                    step: 6,
                    stepImg: "",
                    direction: "Double-check the necklace for balance and the arrangement of charms before wearing it proudly."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Sophie",
                    rating: 5,
                    review: "This necklace turned out amazing! The layers added such depth and beauty."
                },
                {
                    reviewer: "Ethan",
                    rating: 4,
                    review: "Challenging but so rewarding. I learned new techniques and created something really special!"
                }
            ]
        },
        {
            craftName: "Crystal Herb Jar",
            craftType_id: witchcraft._id,
            tagline: "Create a beautiful jar filled with herbs and crystals for magical purposes!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/n8AiYpV.jpeg",
            forKids: false,
            description: "This project combines the use of herbs and crystals to create an enchanted jar that can bring positive energy and intention into your space. Perfect for altars or home decor!",
            materials: [
                {
                    amount: 1,
                    unit: "jar",
                    item: "Glass jar with lid (any size)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Dried herbs (e.g., lavender, sage, rosemary)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Crystals (e.g., clear quartz, amethyst, citrine)"
                },
                {
                    amount: 1,
                    unit: "paper",
                    item: "Paper for intentions or notes"
                },
                {
                    amount: 1,
                    unit: "string",
                    item: "Twine or ribbon for decoration"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Start by selecting your herbs and crystals based on the intentions you want to set."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Layer the dried herbs in the jar, creating a visually appealing arrangement."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Add the selected crystals into the jar, placing them between the herbs."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Write down your intentions on a piece of paper and fold it, placing it inside the jar."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Close the jar and tie twine or ribbon around the lid for an added decorative touch."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Amelia",
                    rating: 5,
                    review: "I loved this project! It looks beautiful on my altar and feels full of energy."
                },
                {
                    reviewer: "William",
                    rating: 4,
                    review: "Great idea! The layering was fun, but I wish I had a few more crystal options."
                }
            ]
        },
        {
            craftName: "Witch's Potion Bottles",
            craftType_id: witchcraft._id,
            tagline: "Craft enchanting potion bottles for display or spellwork!",
            difficulty: "Medium",
            premiumMembership: true,
            craftImg: "https://i.imgur.com/xGjkskn.jpeg",
            forKids: false,
            description: "Create beautiful and mystical potion bottles filled with colorful liquids and magical ingredients. These bottles are perfect for rituals, decoration, or as gifts.",
            materials: [
                {
                    amount: 3,
                    unit: "bottles",
                    item: "Small glass bottles with stoppers or corks"
                },
                {
                    amount: 1,
                    unit: "liquid dye",
                    item: "Food coloring or liquid dye"
                },
                {
                    amount: 1,
                    unit: "glitter",
                    item: "Glitter or shimmer powder"
                },
                {
                    amount: 1,
                    unit: "dried herbs",
                    item: "Dried herbs (e.g., rosemary, lavender) or flowers"
                },
                {
                    amount: 1,
                    unit: "labels",
                    item: "Labels or decorative paper for naming your potions"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Start by selecting your glass bottles and decide on the types of potions you want to create."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Fill each bottle with water and add a few drops of food coloring to create your desired potion color."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Mix in a sprinkle of glitter or shimmer powder for a magical effect."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Add dried herbs or flowers for decoration and scent. Layer them if you want separating colors."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Seal the bottles with stoppers or corks, and attach a label to name each potion. Use decorative paper for an extra touch."
                },
                {
                    step: 6,
                    stepImg: "",
                    direction: "Display your potion bottles on a shelf or use them during rituals to enhance your magical environment."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Isabella",
                    rating: 5,
                    review: "These potion bottles turned out amazing! They make my altar look so beautiful."
                },
                {
                    reviewer: "Lucas",
                    rating: 4,
                    review: "Fun project! My kids loved helping, but remember to supervise them with the dye."
                }
            ]
        },
        {
            craftName: "Witchcraft Spell Jar",
            craftType_id: witchcraft._id,
            tagline: "Create a customized spell jar to manifest your intentions!",
            difficulty: "Hard",
            premiumMembership: true,
            craftImg: "https://i.imgur.com/84FBXU5.jpeg",
            forKids: false,
            description: "This project guides you through making a personalized spell jar. You will use herbs, crystals, and other elements to set intentions and harness energy for your desires.",
            materials: [
                {
                    amount: 1,
                    unit: "jar",
                    item: "Glass jar with a tight-fitting lid"
                },
                {
                    amount: 3,
                    unit: "herbs",
                    item: "Various dried herbs (e.g., thyme, mint, basil, etc.)"
                },
                {
                    amount: 1,
                    unit: "crystals",
                    item: "Small crystals or stones (e.g., clear quartz, rose quartz, or any stone corresponding to your intention)"
                },
                {
                    amount: 1,
                    unit: "paper",
                    item: "Paper to write your intention"
                },
                {
                    amount: 1,
                    unit: "string",
                    item: "Twine or ribbon for sealing"
                },
                {
                    amount: 1,
                    unit: "salt",
                    item: "Sea salt or Himalayan salt"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Start by cleansing your workspace and materials to set a clear intention."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Write down your specific intention or wish on a piece of paper."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Begin layering the dried herbs in the jar, starting with the base herb followed by others that align with your intention."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Add a layer of salt to purify and protect your intention."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Place the crystals on top of the herbs as a final charge for your spell."
                },
                {
                    step: 6,
                    stepImg: "",
                    direction: "Seal the jar with the lid and tie the string or ribbon around it, focusing on your intention as you do so."
                },
                {
                    step: 7,
                    stepImg: "",
                    direction: "Keep the spell jar in a place where you can see it regularly or during rituals to remind you of your intention."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Luna",
                    rating: 5,
                    review: "Creating this spell jar was a powerful experience! I feel more connected to my intentions."
                },
                {
                    reviewer: "Ethan",
                    rating: 4,
                    review: "Great instructions! I enjoyed picking the herbs but wished I had more crystal options."
                }
            ]
        },
        {
            craftName: "Herbal Incense Sticks",
            craftType_id: witchcraft._id,
            tagline: "Make your own natural incense sticks with herbs and oils!",
            difficulty: "Medium",
            premiumMembership: true,
            craftImg: "https://i.imgur.com/oyWmiTv.jpeg",
            forKids: false,
            description: "Craft your own herbal incense sticks using natural ingredients. This project is great for creating custom scents for rituals, meditation, or relaxation.",
            materials: [
                {
                    amount: 10,
                    unit: "sticks",
                    item: "Bamboo skewers or thin dowels"
                },
                {
                    amount: 1,
                    unit: "herbs",
                    item: "Dried herbs (e.g., lavender, patchouli, sandalwood)"
                },
                {
                    amount: 1,
                    unit: "powder",
                    item: "Incense powder or makko powder (for binding)"
                },
                {
                    amount: 1,
                    unit: "oil",
                    item: "Essential oils (e.g., frankincense, cedarwood)"
                },
                {
                    amount: 1,
                    unit: "water",
                    item: "Water (for mixing)"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Combine the dried herbs and incense powder in a bowl. Use a ratio of about 2 parts herbs to 1 part incense powder."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Add a few drops of essential oil to the mixture and mix well."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Gradually add water to form a thick paste that will adhere to the bamboo skewers."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Coat the bamboo skewers with the herbal paste, ensuring they are evenly covered."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Place the coated sticks in a cool, dry place for 24-48 hours to allow them to dry completely."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Mia",
                    rating: 5,
                    review: "These incense sticks smell amazing! I love the personalized scents."
                },
                {
                    reviewer: "Jack",
                    rating: 4,
                    review: "Fun project! I’ll experiment with different herbs next time."
                }
            ]
        },
        {
            craftName: "Crystal Protection Grid",
            craftType_id: witchcraft._id,
            tagline: "Create a powerful crystal grid to manifest protection and positive energy!",
            difficulty: "Hard",
            premiumMembership: true,
            craftImg: "https://i.imgur.com/NPgStLF.jpeg",
            forKids: false,
            description: "Design an intricate crystal protection grid using various crystals to create a powerful energy field. This grid is excellent for meditation, rituals, and enhancing the protective energy in your space.",
            materials: [
                {
                    amount: 1,
                    unit: "base",
                    item: "Wooden or cloth base for your grid (e.g., a piece of wood or fabric square)"
                },
                {
                    amount: 7,
                    unit: "crystals",
                    item: "Assorted crystals (e.g., black tourmaline, clear quartz, amethyst, lapis lazuli)"
                },
                {
                    amount: 1,
                    unit: "paper",
                    item: "Paper and pen for sketching your grid design"
                },
                {
                    amount: 1,
                    unit: "string",
                    item: "String or thread (for connecting crystals, optional)"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Select your crystals based on the protective qualities each holds and your intentions for the grid."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Sketch your grid design on paper, planning the placement and connections between the crystals."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Lay the base (wood or cloth) down in a clear and quiet space where you can focus."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Place each crystal on the base according to your design, ensuring they are arranged in a way that feels balanced."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "If desired, use string to connect the crystals together in a pattern that resonates with your intentions."
                },
                {
                    step: 6,
                    stepImg: "",
                    direction: "Once finished, take a moment to meditate by your grid, visualizing your protective intentions flowing through the crystals."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Ava",
                    rating: 5,
                    review: "Creating this grid was an enlightening experience! I can feel the energy in my space."
                },
                {
                    reviewer: "Liam",
                    rating: 4,
                    review: "Challenging to set up, but very rewarding. I've noticed a positive change since I completed it."
                }
            ]
        },
        {
            craftName: "Witch's Book of Shadows",
            craftType_id: witchcraft._id,
            tagline: "Create your own personalized Book of Shadows for recording spells and rituals!",
            difficulty: "Expert",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/4zz9bxP.jpeg",
            forKids: false,
            description: "This project involves creating a personalized Book of Shadows to document spells, rituals, and your spiritual journey. Customize your book with embellishments, pages, and unique binding techniques.",
            materials: [
                {
                    amount: 1,
                    unit: "stack",
                    item: "Blank pages (paper or cardstock, various sizes)"
                },
                {
                    amount: 1,
                    unit: "cover",
                    item: "Thick cardboard or leather for the cover"
                },
                {
                    amount: 1,
                    unit: "thread",
                    item: "Heavy-duty thread or cord for binding"
                },
                {
                    amount: 1,
                    unit: "tools",
                    item: "Needle and bone folder or awl for binding"
                },
                {
                    amount: 1,
                    unit: "decorations",
                    item: "Decorative items (stickers, washi tape, images)"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Select your blank pages and decide on the layout, choosing how many sections or chapters you want."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Cut your cover materials to size, making sure it adequately fits all the pages."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Use the needle to make evenly spaced holes along the edge of the pages and cover for binding."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Bind the pages and cover together using the thread or cord, tying securely."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Customize your Book of Shadows by decorating the cover with symbols, stickers, or personal imagery that resonates with you."
                },
                {
                    step: 6,
                    stepImg: "",
                    direction: "Fill your Book of Shadows with spells, notes, rituals, and insights as you explore your practice."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Raven",
                    rating: 5,
                    review: "Creating my Book of Shadows was an incredibly fulfilling experience! I love how it turned out."
                },
                {
                    reviewer: "Molly",
                    rating: 4,
                    review: "A little challenging but definitely worth it. I can’t wait to fill it with my journey."
                }
            ]
        },
        {
            craftName: "Painted Flower Pots",
            craftType_id: homeDecor._id,
            tagline: "Transform ordinary flower pots into vibrant decor pieces!",
            difficulty: "Easy",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/HOXV4US.jpeg",
            forKids: true,
            description: "Create personalized flower pots with colorful paints to brighten up your home or garden. This fun and easy project is perfect for kids and adults alike!",
            materials: [
                {
                    amount: 2,
                    unit: "pots",
                    item: "Terracotta flower pots"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Acrylic paint set (various colors)"
                },
                {
                    amount: 1,
                    unit: "brush",
                    item: "Paintbrushes (various sizes)"
                },
                {
                    amount: 1,
                    unit: "water",
                    item: "Water cup (for cleaning brushes)"
                },
                {
                    amount: 1,
                    unit: "palette",
                    item: "Palette or plate for mixing colors"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Choose your flower pots and clean them to ensure a surface free of dust and residue."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Plan your design and pick the colors you want to use for painting."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Use the paintbrush to apply a base coat (optional) and wait for it to dry."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Begin painting your design on the pot, using multiple colors and techniques like dots or stripes."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Once the pots are decorated and dry, consider sealing them with a clear acrylic spray for durability."
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Bella",
                    rating: 5,
                    review: "This was so much fun! My pots turned out beautifully and added great color to my porch."
                },
                {
                    reviewer: "Oliver",
                    rating: 4,
                    review: "A simple and enjoyable project! Loved how I could express my creativity."
                }
            ]
        },
        {
            craftName: "DIY Wall Art",
            craftType_id: homeDecor._id,
            tagline: "Create stunning wall art to transform your living space!",
            difficulty: "Medium",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/Ry2na3F.jpeg",
            forKids: false,
            description: "Design and craft your own wall art using canvas, paint, and various embellishments to personalize your home decor. Perfect for showcasing your creativity and style!",
            materials: [
                {
                    amount: 1,
                    unit: "canvas",
                    item: "Canvas board (16x20 inches or your desired size)"
                },
                {
                    amount: 1,
                    unit: "set",
                    item: "Acrylic paint set"
                },
                {
                    amount: 1,
                    unit: "brush",
                    item: "Paintbrushes (various sizes)"
                },
                {
                    amount: 1,
                    unit: "markers",
                    item: "Permanent markers or paint pens"
                },
                {
                    amount: 1,
                    unit: "decorative items",
                    item: "Embellishments (such as fabric, glitter, or stickers)"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Choose a theme and color palette that resonates with your style and room decor."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Sketch your design lightly on the canvas with a pencil as a guide."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Begin painting the base layer of your design with acrylics, allowing each layer to dry before adding more."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Use permanent markers or paint pens to add details and outlines to enhance your painting."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Incorporate decorative elements such as glitter or fabric pieces for added texture and visual interest."
                },
                {
                    step: 6,
                    stepImg: "",
                    direction: "Let the finished artwork dry completely before hanging it on your wall!"
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Emily",
                    rating: 5,
                    review: "I loved making this wall art! It adds a personal touch to my space."
                },
                {
                    reviewer: "Amir",
                    rating: 4,
                    review: "This was a fun project! I enjoyed experimenting with colors and textures."
                }
            ]
        },
        {
            craftName: "DIY Macrame Wall Hanging",
            craftType_id: homeDecor._id,
            tagline: "Craft a beautiful macrame wall hanging to enhance your home decor!",
            difficulty: "Hard",
            premiumMembership: false,
            craftImg: "https://i.imgur.com/WjzXOSz.jpeg",
            forKids: false,
            description: "Create a stunning macrame wall hanging using various knots and techniques. This project is perfect for adding a boho touch to your living space and is ideal for those looking to enhance their crafting skills.",
            materials: [
                {
                    amount: 5,
                    unit: "meters",
                    item: "Cotton macrame cord (around 3-5mm thickness)"
                },
                {
                    amount: 1,
                    unit: "wood dowel",
                    item: "Wooden dowel or branch for the hanging base (about 1-2 feet long)"
                },
                {
                    amount: 1,
                    unit: "scissors",
                    item: "Scissors for cutting cord"
                },
                {
                    amount: 1,
                    unit: "tape",
                    item: "Masking tape (to secure the cord while you work)"
                },
                {
                    amount: 1,
                    unit: "instructions",
                    item: "Macrame pattern or guide (if desired)"
                }
            ],
            directions: [
                {
                    step: 1,
                    stepImg: "",
                    direction: "Cut lengths of cord (typically 2-3 times the desired height of the finished piece)."
                },
                {
                    step: 2,
                    stepImg: "",
                    direction: "Secure the wooden dowel with masking tape to keep it stable as you tie the knots."
                },
                {
                    step: 3,
                    stepImg: "",
                    direction: "Begin tying your chosen macrame knots (e.g., lark's head, square knot) following the pattern or your design."
                },
                {
                    step: 4,
                    stepImg: "",
                    direction: "Continue adding rows and patterns until you reach your desired length and design."
                },
                {
                    step: 5,
                    stepImg: "",
                    direction: "Trim the ends of the cord to create a fringe or leave them as is, depending on your preference."
                },
                {
                    step: 6,
                    stepImg: "",
                    direction: "Remove the masking tape and hang your macrame wall hanging!"
                }
            ],
            youtubeLink: "",
            craftReviews: [
                {
                    reviewer: "Chloe",
                    rating: 5,
                    review: `I'm so proud of how my macrame wall hanging turned out! It's beautiful!`
                },
                {
                    reviewer: "Liam",
                    rating: 4,
                    review: "Challenging but rewarding! I loved learning new knots along the way."
                }
            ]
        },

    ]

    await Craft.insertMany(crafts)
    console.log('created crafts')
}

const run = async () => {
    await main()
    db.close()
}

run()