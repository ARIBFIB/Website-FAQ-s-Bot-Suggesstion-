
const relatedQuestionsMap = {
    rooms: [
        "What type of Rooms you need",
        "What are the HI Standards and HI Quality & Sustainability? ",
        "Which Rooms are avaliable?"
    ],
    checkIn: [
        "What are the check-in times?",
        "Can I check in early?",
        "What documents do I need for check-in?"
    ],
    price: [
        "What is the price per night?",
        "Are there any discounts available?",
        "What is included in the price?"
    ],
    facilities: [
        "What facilities are available in the hostel?",
        "Is there free Wi-Fi?",
        "Are there kitchen facilities?",
    ],
        
    cancellation: [
        "What is the cancellation policy?",
        "Can I cancel my booking for free?",
        "How do I cancel my reservation?"
    ],
    payment: [
        "What payment methods are accepted?",
        "Do you require a deposit?",
        "Can I pay in cash?"
    ],
    food: [
        "Is breakfast included?",
        "Are there dining options nearby?",
        "Can I cook my meals in the hostel?"
    ],
    location: [
        "How far is the hostel from the city center?",
        "Is the hostel close to public transport?",
        "What attractions are near the hostel?"
    ],
    safety: [
        "What safety measures are in place?",
        "Is there 24-hour security?",
        "Are there lockers available for my belongings?"
    ],
    bedTypes: [
        "What types of beds are available?",
        "Are there private rooms?",
        "Do you offer dormitory-style accommodation?"
    ],
    ageRestrictions: [
        "Is there an age limit for guests?",
        "Can children stay at the hostel?",
        "Are there age restrictions in dorms?"
    ],
    activities: [
        "What activities does the hostel organize?",
        "Are there any tours available?",
        "Can I book excursions through the hostel?"
    ],
    transportation: [
        "Do you provide airport transfers?",
        "How can I get to the hostel from the airport?",
        "Is there parking available?"
    ],
    reviews: [
        "Where can I read reviews of the hostel?",
        "What do previous guests say about the hostel?",
        "Are there ratings available?"
    ],
    events: [
        "Does the hostel host any events?",
        "Are there social activities for guests?",
        "Can I meet other travelers at the hostel?"
    ],
    laundry: [
        "Is there a laundry service available?",
        "Can I do my laundry at the hostel?",
        "Are there washing machines on-site?"
    ],
    checkOut: [
        "What are the check-out times?",
        "Can I extend my stay?",
        "What do I need to do at check-out?"
    ],
    accessibility: [
        "Is the hostel wheelchair accessible?",
        "Are there facilities for disabled guests?",
        "How do you accommodate special needs?"
    ],
    internet: [
        "Is Wi-Fi free?",
        "How do I connect to the internet?",
        "Are there computers available for guest use?"
    ],
    petPolicy: [
        "Are pets allowed in the hostel?",
        "What is the pet policy?",
        "Are there pet-friendly rooms available?"
    ],
    groupBookings: [
        "Can I book for a large group?",
        "Are there group discounts?",
        "How do I make a group reservation?"
    ],
    insurance: [
        "Do I need travel insurance?",
        "Can I buy insurance through the hostel?",
        "What does travel insurance cover?"
    ],
    checkInAge: [
        "What is the minimum age for check-in?",
        "Can minors check in without an adult?",
        "Are there parental consent forms needed?"
    ],
    culturalActivities: [
        "Does the hostel organize cultural events?",
        "Are there local tours available?",
        "Can I learn about local customs?"
    ],
    surroundingArea: [
        "What is the neighborhood like?",
        "Are there shops and restaurants nearby?",
        "Is it safe to walk around the area?"
    ],
    roomAmenities: [
        "What amenities are in the rooms?",
        "Are towels and linens provided?",
        "Do rooms have air conditioning?"
    ],
    wifi: [
        "Is there free Wi-Fi in the common areas?",
        "How strong is the Wi-Fi signal?",
        "Can I use Wi-Fi in my room?"
    ],
    parking: [
        "Is parking available at the hostel?",
        "Are there fees for parking?",
        "Can I reserve a parking spot?"
    ],
    specialOffers: [
        "Are there any current promotions?",
        "How can I find out about special offers?",
        "Do you offer loyalty programs?"
    ],
    transportLinks: [
        "How far is the nearest bus station?",
        "Is there a train station nearby?",
        "Are taxis easily accessible?"
    ],
    hostelRules: [
        "What are the hostel rules?",
        "Are there quiet hours?",
        "Can I have guests in my room?"
    ],
    environmentalPractices: [
        "Does the hostel practice sustainability?",
        "Are there recycling facilities?",
        "How does the hostel reduce waste?"
    ],
    commonAreas: [
        "What common areas are available?",
        "Is there a lounge for guests?",
        "Are there activities in the common room?"
    ],
    hostelHistory: [
        "What is the history of the hostel?",
        "How long has the hostel been in operation?",
        "What makes this hostel unique?"
    ],
    seasonalAvailability: [
        "Are there seasonal rates?",
        "When is the best time to visit?",
        "Is the hostel open year-round?"
    ],
    cleaning: [
        "How often are rooms cleaned?",
        "Is there a cleaning fee?",
        "Do I need to clean my own room?"
    ],
    contactInformation: [
        "What is the contact number for the hostel?",
        "How can I reach the hostel?",
        "Is there an email for inquiries?"
    ],
    localCuisine: [
        "Are there local dishes I should try?",
        "Does the hostel offer cooking classes?",
        "Where can I find traditional food?"
    ],
    culturalNorms: [
        "What cultural norms should I know?",
        "Are there dress codes in the area?",
        "How do I greet locals?"
    ],
    weather: [
        "What is the weather like during my stay?",
        "Do I need to bring special clothing?",
        "Is there a rainy season?"
    ],
    checkInProcess: [
        "How does the check-in process work?",
        "What should I expect at check-in?",
        "Can I check in online?"
    ],
    securityFeatures: [
        "What security features does the hostel have?",
        "Are there security cameras?",
        "How are guests kept safe?"
    ],
    cookingFacilities: [
        "Are there cooking facilities available?",
        "Can I store food in the kitchen?",
        "Is there a refrigerator for guests?"
    ],
    culturalExchange: [
        "How can I participate in cultural exchange?",
        "Are there language exchange programs?",
        "Can I meet local people through the hostel?"
    ],
    volunteeringOpportunities: [
        "Does the hostel offer volunteering opportunities?",
        "How can I get involved in local projects?",
        "Are there community service programs?"
    ],
    localAttractions: [
        "What attractions are nearby?",
        "Are there guided tours available?",
        "What is the best way to see the sights?"
    ],
    familyFriendly: [
        "Is the hostel family-friendly?",
        "Are there activities for children?",
        "Can I book family rooms?"
    ],
    roomUpgrades: [
        "Can I upgrade my room?",
        "What room upgrades are available?",
        "Is there an additional cost for upgrades?"
    ],
    feedback: [
        "How can I leave feedback for the hostel?",
        "Are reviews taken into account?",
        "Can I provide suggestions for improvement?"
    ],
    emergencyContacts: [
        "Who do I contact in case of an emergency?",
        "Is there a local hospital nearby?",
        "What is the emergency number?"
    ],
    localFestivals: [
        "Are there any local festivals during my stay?",
        "How can I participate in local events?",
        "What cultural celebrations should I know about?"
    ],
    siteSeeingTips: [
        "What are the best sightseeing tips?",
        "How do I avoid tourist traps?",
        "Are there any hidden gems to explore?"
    ],
    bicycleRentals: [
        "Is bike rental available at the hostel?",
        "Can I store my bicycle securely?",
        "Are there bike tours offered?"
    ],
    groceryStores: [
        "Where is the nearest grocery store?",
        "Are there any markets nearby?",
        "Can I buy local products?"
    ],
    technology: [
        "Is there tech support available?",
        "Are there charging stations for devices?",
        "Can I borrow tech equipment?"
    ],
    culturalWorkshops: [
        "Are there workshops on local culture?",
        "How can I learn traditional crafts?",
        "Are there cooking classes available?"
    ],
    socialMedia: [
        "Does the hostel have social media?",
        "How can I follow the hostel online?",
        "Are there online communities for guests?"
    ],
    photographySpots: [
        "Where are the best photography spots?",
        "Can I join a photography tour?",
        "Are there scenic viewpoints?"
    ],
    publicTransport: [
        "How do I use public transport?",
        "Are there passes for tourists?",
        "What is the best way to get around?"
    ],
    giftShop: [
        "Is there a gift shop in the hostel?",
        "What souvenirs can I buy?",
        "Are there local crafts for sale?"
    ],
    hostelComparisons: [
        "How does this hostel compare to others?",
        "What makes this hostel unique?",
        "Are there other similar hostels nearby?"
    ],
    seasonalActivities: [
        "What seasonal activities are available?",
        "Are there winter sports nearby?",
        "What summer activities can I enjoy?"
    ],
    networking: [
        "Can I network with other travelers?",
        "Are there meetups at the hostel?",
        "How do I connect with other guests?"
    ],
    culturalImmersion: [
        "How can I immerse myself in the culture?",
        "Are there local experiences offered?",
        "Can I live with a local family?"
    ],
    sustainableTourism: [
        "What sustainable practices does the hostel follow?",
        "How can I support local sustainability?",
        "Are there eco-friendly activities?"
    ],
    languageBarriers: [
        "How do I overcome language barriers?",
        "Are there translation services available?",
        "Can I learn basic local phrases?"
    ],
    neighborhoodSafety: [
        "Is the neighborhood safe at night?",
        "Are there areas I should avoid?",
        "How do I stay safe while traveling?"
    ],
    hostelPolicies: [
        "What are the hostel's policies on noise?",
        "Are there rules for common areas?",
        "How do I report issues?"
    ],
    localHistory: [
        "What is the history of the area?",
        "Are there historical sites to visit?",
        "Can I take a history tour?"
    ],
    seasonalCuisine: [
        "What seasonal dishes should I try?",
        "Are there food festivals?",
        "Where can I find local specialties?"
    ],
    culturalEtiquette: [
        "What are the cultural etiquettes I should know?",
        "Are there customs specific to the area?",
        "How do I show respect to locals?"
    ],
    groupActivities: [
        "What group activities are organized?",
        "Can I join a travel group?",
        "Are there team-building exercises?"
    ],
    localGuides: [
        "Can I hire a local guide?",
        "Are there guided tours available?",
        "How do I find a reputable guide?"
    ],
    volunteering: [
        "Are there opportunities to volunteer?",
        "How can I make a difference in the community?",
        "What types of volunteer work are available?"
    ],
    artisticEvents: [
        "Are there artistic events happening during my stay?",
        "Can I attend local art exhibitions?",
        "Are there workshops on art techniques?"
    ],
    localCrafts: [
        "Where can I buy local crafts?",
        "Are there craft markets nearby?",
        "Can I learn crafting skills?"
    ],
    traditionalMusic: [
        "Are there traditional music performances?",
        "Can I attend local concerts?",
        "Where can I experience live music?"
    ],
    nightlife: [
        "What is the nightlife like?",
        "Are there bars or clubs nearby?",
        "What are the best spots for nightlife?"
    ],
    localCustoms: [
        "What local customs should I be aware of?",
        "Are there unique traditions in the area?",
        "How do locals celebrate holidays?"
    ],
    environmentalTours: [
        "Are there eco-tours available?",
        "Can I participate in conservation efforts?",
        "What wildlife can I see?"
    ],
    scenicRoutes: [
        "What are the best scenic routes to take?",
        "Are there driving tours available?",
        "Can I hike in the area?"
    ],
    outdoorActivities: [
        "What outdoor activities are popular?",
        "Can I rent equipment for hiking?",
        "Are there guided nature walks?"
    ],
    culturalExchanges: [
        "Are there programs for cultural exchanges?",
        "How can I participate in local traditions?",
        "Can I host a cultural event?"
    ],
    cookingTips: [
        "What cooking tips do you have for local dishes?",
        "Can I join a cooking class?",
        "Are there cooking competitions?"
    ],
    localLegends: [
        "Are there local legends or myths?",
        "Can I learn about the folklore of the area?",
        "Where can I hear local stories?"
    ],
    adventureSports: [
        "What adventure sports are available?",
        "Can I try rock climbing or rafting?",
        "Are there guided adventure tours?"
    ],
    farmingExperiences: [
        "Are there opportunities for farm stays?",
        "Can I learn about local agriculture?",
        "What crops are grown in the area?"
    ],
    culturalFilms: [
        "Are there local film festivals?",
        "Can I watch films about the culture?",
        "Where can I find independent cinema?"
    ],
    traditionalClothing: [
        "What traditional clothing should I know about?",
        "Are there markets selling local attire?",
        "Can I try on traditional garments?"
    ],
    marketVisits: [
        "When are the best markets to visit?",
        "Can I join a market tour?",
        "What can I buy at local markets?"
    ],
    localSports: [
        "What sports are popular in the area?",
        "Can I attend a local game?",
        "Where can I play sports?"
    ],
    culturalFestivals: [
        "What cultural festivals should I attend?",
        "Are there annual celebrations?",
        "How can I participate in local festivities?"
    ],
    historicalTours: [
        "Are there historical tours available?",
        "Can I visit important landmarks?",
        "What history should I know about the area?"
    ],
    sustainablePractices: [
        "What sustainable practices can I adopt while traveling?",
        "How can I minimize my impact?",
        "Are there eco-friendly accommodations?"
    ],
    internetAccess: [
        "How do I get reliable internet access?",
        "Are there cafes with Wi-Fi?",
        "Can I use my phone for internet?"
    ],
    localWildlife: [
        "What wildlife can I expect to see?",
        "Are there wildlife tours available?",
        "How do I respect local ecosystems?"
    ],
    culturalExchangePrograms: [
        "Are there cultural exchange programs?",
        "How can I learn from locals?",
        "Can I host a local in my home?"
    ],
    photographyTips: [
        "What are the best photography tips for the area?",
        "Can I join a photography workshop?",
        "Where are the best spots for photos?"
    ],
    culturalInsights: [
        "What insights can you give about local culture?",
        "Are there books or resources to learn more?",
        "How can I engage with the community?"
    ],
    hotel: [
        "What amenities are available at the hotel?",
        "Is breakfast included in the hotel stay?",
        "What is the cancellation policy for hotel bookings?"
    ],
    lodge: [
        "What activities are offered at the lodge?",
        "Are meals provided at the lodge?",
        "Is there a minimum stay requirement?"
    ],
    dormitory: [
        "What are the sleeping arrangements in the dormitory?",
        "Are lockers available in the dormitory?",
        "What is the check-in process for the dormitory?"
    ],
    inn: [
        "What is the history of the inn?",
        "Are pets allowed in the inn?",
        "What local attractions are near the inn?"
    ],
    accommodation: [
        "What types of accommodation are available?",
        "Can I book accommodations for a group?",
        "What is the average price for accommodations?"
    ],
    dorm: [
        "Are there co-ed dorms?",
        "What facilities are shared in the dorm?",
        "How do I secure a spot in the dorm?"
    ],
    shelter: [
        "What services does the shelter provide?",
        "Are there restrictions for staying at the shelter?",
        "How can I volunteer at the shelter?"
    ],
    lodging: [
        "What types of lodging are available?",
        "Is there a difference between lodging and accommodation?",
        "Are there budget lodging options?"
    ],
    apartment: [
        "What amenities are included in the apartment?",
        "Is there a security deposit for the apartment?",
        "What is the lease duration for the apartment?"
    ],
    guesthouse: [
        "What is the guesthouse's policy on pets?",
        "Are meals included at the guesthouse?",
        "How do I book a room in the guesthouse?"
    ],
    bungalow: [
        "What features do the bungalows have?",
        "Is there outdoor space with the bungalow?",
        "How many guests can stay in a bungalow?"
    ],
    canteen: [
        "What meals are served in the canteen?",
        "Are there vegetarian options in the canteen?",
        "What are the opening hours of the canteen?"
    ],
    residential: [
        "What are the residential options available?",
        "Are there community activities in residential areas?",
        "How do I find residential housing?"
    ],
    hostelry: [
        "What is the atmosphere like in the hostelry?",
        "Are there private rooms available at the hostelry?",
        "What is the check-in policy?"
    ],
    motel: [
        "What is the difference between a motel and a hotel?",
        "Are there parking facilities at the motel?",
        "What are the motel's room rates?"
    ],
    premises: [
        "What are the premises guidelines?",
        "Are there restrictions on the premises?",
        "How do I report issues on the premises?"
    ],
    convent: [
        "Can visitors stay at the convent?",
        "What is the history of the convent?",
        "Are meals provided at the convent?"
    ],
    youthHostel: [
        "What is the age limit for the youth hostel?",
        "Are there organized activities at the youth hostel?",
        "How do I book a stay at the youth hostel?"
    ],
    backpacking: [
        "What are the best destinations for backpacking?",
        "How do I pack for backpacking?",
        "What budget do I need for backpacking?"
    ],
    orphanage: [
        "What services does the orphanage provide?",
        "Are there volunteer opportunities at the orphanage?",
        "How can I support the orphanage?"
    ],
    apartments: [
        "What are the available apartment sizes?",
        "Are utilities included in the apartment rent?",
        "How do I apply for an apartment?"
    ],
    auberge: [
        "What amenities does the auberge offer?",
        "Is it possible to book a private room in the auberge?",
        "What is the check-out policy for the auberge?"
    ],
    pub: [
        "What food options are available at the pub?",
        "Are there live events at the pub?",
        "What are the pub's opening hours?"
    ],
    rentedAccommodation: [
        "What are the terms for rented accommodation?",
        "How can I find rented accommodation?",
        "Is there a minimum rental period?"
    ],
    studentLodging: [
        "What are the options for student lodging?",
        "Are there any discounts for student lodging?",
        "How do I apply for student lodging?"
    ],
    house: [
        "What are the benefits of renting a house?",
        "How do I find a house to rent?",
        "What utilities are typically included in renting a house?"
    ],
    hostellingInternational: [
        "What is Hostelling International?",
        "Are there membership benefits with Hostelling International?",
        "How do I find HI hostels?"
    ],
    guesthouses: [
        "What types of guesthouses are available?",
        "Can I book a guesthouse for a group?",
        "What amenities are commonly found in guesthouses?"
    ],
    residence: [
        "What is the difference between a residence and a dormitory?",
        "Are there meal plans available in residences?",
        "What are the rules for living in a residence?"
    ],
    bed: [
        "What types of beds are available?",
        "How often are beds cleaned?",
        "Can I request specific bedding?"
    ],
    abode: [
        "What constitutes an abode?",
        "Are there legal definitions for an abode?",
        "How do I choose a comfortable abode?"
    ],
    boarding: [
        "What is the boarding process?",
        "Are meals included in boarding?",
        "How do I find boarding options?"
    ],
    hut: [
        "What facilities are available in huts?",
        "Can I rent a hut for vacation?",
        "What is the price range for huts?"
    ],
    airbnb: [
        "How do I book an Airbnb?",
        "What are the cancellation policies for Airbnb?",
        "Are there safety measures for Airbnb properties?"
    ],
    home: [
        "What defines a home?",
        "How do I make my house feel like a home?",
        "What are the benefits of home ownership?"
    ],
    caravanPark: [
        "What amenities are available at a caravan park?",
        "Can I rent a caravan at the park?",
        "What activities are offered at caravan parks?"
    ],
    postHouse: [
        "What services are offered at a post house?",
        "Are there accommodations available at the post house?",
        "What is the history of the post house?"
    ],
    foyer: [
        "What is the purpose of a foyer?",
        "How can I decorate my foyer?",
        "What furniture is suitable for a foyer?"
    ],
    australia: [
        "What are the best accommodations in Australia?",
        "Are there unique lodging options in Australia?",
        "What is the climate like in Australia?"
    ],
    // hostel: [
    //     "What is the difference between a hostel and a hotel?",
    //     "Are hostels safe for solo travelers?",
    //     "What amenities do hostels typically offer?"
    // ],
    hermitage: [
        "What is the purpose of a hermitage?",
        "Can visitors stay in a hermitage?",
        "What is the history of hermitages?"
    ],
    jnu: [
        "What accommodations are available near JNU?",
        "Are there student hostels at JNU?",
        "What is the campus life like at JNU?"
    ],
    hotels: [
        "How do I find the best hotel deals?",
        "What are the must-have amenities in hotels?",
        "How do hotel loyalty programs work?"
    ],
    camping: [
        "What do I need for camping?",
        "Are there campgrounds available?",
        "What are the best camping spots?"
    ],
    hospice: [
        "What services are provided at a hospice?",
        "How do I find a hospice for care?",
        "Are there volunteer opportunities at hospices?"
    ],
    diningHall: [
        "What meals are served in the dining hall?",
        "Are there dietary options in the dining hall?",
        "What are the dining hall hours?"
    ],
    café: [
        "What types of food are available at the café?",
        "Are there vegan options at the café?",
        "What is the café's opening schedule?"
    ],
    homestay: [
        "What is included in a homestay?",
        "How do I find a homestay program?",
        "Are homestays safe for travelers?"
    ],
    workhouse: [
        "What was the purpose of a workhouse?",
        "Are there modern equivalents to workhouses?",
        "What services did historical workhouses provide?"
    ],
    homeful: [
        "What does it mean to feel homeful?",
        "How can I create a homeful environment?",
        "What are the benefits of being homeful?"
    ],
    humanSexualActivity: [
        "What resources are available for understanding human sexual activity?",
        "How do cultural attitudes affect human sexual activity?",
        "What are the health implications of human sexual activity?"
    ],
    gapYear: [
        "What are the benefits of taking a gap year?",
        "How do I plan a gap year?",
        "What activities can I do during a gap year?"
    ],
    layDown: [
        "What does it mean to lay down?",
        "Are there benefits to laying down during the day?",
        "What are the best practices for laying down?"
    ],
    homePigeon: [
        "What are home pigeons used for?",
        "How do I care for home pigeons?",
        "What is the history of home pigeons?"
    ],
    motelRoom: [
        "What amenities are typically found in a motel room?",
        "How do I find affordable motel rooms?",
        "What are the check-in policies for motel rooms?"
    ],
    sleepPerson: [
        "What factors affect a person's sleep?",
        "How can I improve my sleep quality?",
        "What are the stages of sleep?"
    ],
    sleepIn: [
        "What does it mean to sleep in?",
        "Is sleeping in beneficial for health?",
        "How do I create an environment for sleeping in?"
    ],
    myHouse: [
        "What makes my house special?",
        "How can I personalize my house?",
        "What are the best home improvement tips?"
    ],
    billiardRoom: [
        "What features are common in a billiard room?",
        "How do I set up a billiard room at home?",
        "What games can be played in a billiard room?"
    ],
    electricToothbrush: [
        "What are the benefits of using an electric toothbrush?",
        "How do I choose the right electric toothbrush?",
        "What is the proper way to use an electric toothbrush?"
    ],
    bicycleTouring: [
        "What do I need for bicycle touring?",
        "What are the best routes for bicycle touring?",
        "How do I plan a bicycle touring trip?"
    ],
    houseOfCommon: [
        "What is the House of Commons?",
        "How does the House of Commons function?",
        "What are the roles of members in the House of Commons?"
    ],
    boutiqueHotels: [
        "What defines a boutique hotel?",
        "Are boutique hotels more expensive than regular hotels?",
        "What amenities can I expect at a boutique hotel?"
    ],
    eurotrip: [
        "What are the best destinations for a Eurotrip?",
        "How do I budget for a Eurotrip?",
        "What should I pack for a Eurotrip?"
    ],
    lasFallas: [
        "What is Las Fallas?",
        "How can I participate in Las Fallas?",
        "What are the highlights of Las Fallas?"
    ],
    sanFermin: [
        "What is the San Fermin festival?",
        "How do I prepare for San Fermin?",
        "What traditions are part of San Fermin?"
    ],
    economicCrisis2008: [
        "What caused the 2008 economic crisis?",
        "How did the 2008 economic crisis affect housing?",
        "What lessons were learned from the 2008 economic crisis?"
    ],
    fifaWorldCup: [
        "What is the history of the FIFA World Cup?",
        "How do I get tickets for the FIFA World Cup?",
        "What are the most memorable moments in FIFA World Cup history?"
    ],
    unitedStates: [
        "What are the best travel destinations in the United States?",
        "How do I navigate accommodations in the United States?",
        "What cultural experiences should I seek in the United States?"
    ],
    easternEurope: [
        "What are the must-see places in Eastern Europe?",
        "How do I find budget accommodations in Eastern Europe?",
        "What cultural events are popular in Eastern Europe?"
    ],
    journeyOfJaredPrice: [
        "What is the journey of Jared Price about?",
        "What themes are explored in the journey of Jared Price?",
        "How does the journey of Jared Price reflect personal growth?"
    ],
    halfwayHouse: [
        "What is a halfway house?",
        "How do halfway houses function?",
        "What support do halfway houses provide?"
    ],
    urbanLegend: [
        "What are some popular urban legends?",
        "How do urban legends reflect societal fears?",
        "What role do urban legends play in culture?"
    ],
    motionPicture: [
        "What defines a motion picture?",
        "How has technology changed motion pictures?",
        "What are the elements of a successful motion picture?"
    ],
    aMapForSaturday: [
        "What is 'A Map for Saturday' about?",
        "How does 'A Map for Saturday' depict travel?",
        "What are the key takeaways from 'A Map for Saturday'?"
    ],
    hostelPartII: [
        "What themes are explored in 'Hostel: Part II'?",
        "How does 'Hostel: Part II' compare to the first film?",
        "What are the critical receptions of 'Hostel: Part II'?"
    ],
    tenement: [
        "What is a tenement?",
        "How do tenements differ from apartments?",
        "What historical significance do tenements have?"
    ],
    maisonette: [
        "What is a maisonette?",
        "How do maisonettes differ from other housing types?",
        "What are the benefits of living in a maisonette?"
    ],
    barracks: [
        "What are military barracks used for?",
        "How do barracks accommodate soldiers?",
        "What amenities are available in barracks?"
    ],
    homeless: [
        "What services are available for the homeless?",
        "How can I help the homeless community?",
        "What are the causes of homelessness?"
    ],
    armyBarracks: [
        "What is the purpose of army barracks?",
        "How are army barracks structured?",
        "What life is like in army barracks?"
    ],
    storeroom: [
        "What is typically stored in a storeroom?",
        "How can I organize a storeroom effectively?",
        "What are the best practices for storeroom management?"
    ],
    bungalows: [
        "What is the layout of a typical bungalow?",
        "Are bungalows suitable for families?",
        "What are the advantages of living in a bungalow?"
    ],
    lodges: [
        "What amenities are provided in lodges?",
        "Are lodges pet-friendly?",
        "How do I book a lodge for a vacation?"
    ],
    shanty: [
        "What defines a shanty?",
        "How do shanties differ from other types of housing?",
        "What are the living conditions in shanties?"
    ],
    storey: [
        "What is a storey in building design?",
        "How do I calculate the number of storeys in a building?",
        "What are the benefits of multi-storey buildings?"
    ],
    bedsit: [
        "What is a bedsit?",
        "Are bedsits suitable for students?",
        "What amenities can I expect in a bedsit?"
    ],
    monastery: [
        "What is the purpose of a monastery?",
        "Can visitors stay at a monastery?",
        "What is life like in a monastery?"
    ],
    cafe: [
        "What types of food are served in cafes?",
        "Are there cafes with live music?",
        "What is the atmosphere like in a typical cafe?"
    ],
    washroom: [
        "What facilities are included in a washroom?",
        "How can I organize a washroom effectively?",
        "What are the best practices for maintaining a washroom?"
    ],
    saw: [
        "What types of saws are used in construction?",
        "How do I choose the right saw for my project?",
        "What safety measures should I take when using a saw?"
    ],
    multiStorey: [
        "What are the benefits of multi-storey buildings?",
        "How do I design a multi-storey home?",
        "What challenges come with multi-storey construction?"
    ],
    chalet: [
        "What defines a chalet?",
        "How do I find a chalet for rental?",
        "What amenities are commonly found in chalets?"
    ],
    seminary: [
        "What is the purpose of a seminary?",
        "How do seminaries train clergy?",
        "What life is like in a seminary?"
    ],
    footpath: [
        "What is the purpose of a footpath?",
        "How can I improve footpath accessibility?",
        "What are the safety considerations for footpaths?"
    ],
    nirmala: [
        "What is the significance of Nirmala?",
        "How does Nirmala relate to cultural practices?",
        "What events are associated with Nirmala?"
    ],
    godown: [
        "What is a godown used for?",
        "How do I organize a godown?",
        "What are the safety regulations for godowns?"
    ],
    terracedHouse: [
        "What defines a terraced house?",
        "What are the benefits of living in a terraced house?",
        "How do terraced houses impact community design?"
    ],
    india: [
        "What are the best accommodations in India?",
        "How do I navigate local customs in India?",
        "What cultural experiences should I seek in India?"
    ],
    hostels: [
        "What is the difference between hostels and hotels?",
        "Are hostels safe for backpackers?",
        "What amenities do hostels typically provide?"
    ],
    bar: [
        "What types of drinks are served at the bar?",
        "Are there happy hour specials at the bar?",
        "What entertainment options are available at the bar?"
    ],
    village: [
        "What are the characteristics of a village?",
        "How do villages differ from towns?",
        "What cultural practices are common in villages?"
    ],
    higherSecondarySchool: [
        "What is the curriculum for higher secondary schools?",
        "How do I apply to a higher secondary school?",
        "What extracurricular activities are available in higher secondary schools?"
    ],
    flophouse: [
        "What is a flophouse?",
        "How do flophouses operate?",
        "What are the living conditions like in a flophouse?"
    ],
    
    // hostel : [
    //     "What is a hostel?",
    //     "What types of accommodation do hostels offer?",
    //     "How do hostels differ from hotels?"
    // ],
    HIStandards: [
        "What are the HI Standards?",
        "How do HI Standards ensure quality in hostels?",
        "What is the HI Quality & Sustainability program?"
    ],
    "facilities": [
        "What type of facilities can I expect to find at a hostel?",
        "Are there cooking facilities in hostels?",
        "Do hostels provide laundry services?"
    ],
    age: [
        "Who can stay at a hostel?",
        "Is there an age limit for staying in hostels?",
        "Can minors stay unaccompanied in hostels?"
    ],
    limit: [
        "Who can stay at a hostel?",
        "Is there an age limit for staying in hostels?",
        "Can minors stay unaccompanied in hostels?"
    ],
    children: [
        "Can children stay at hostels?",
        "What are the age requirements for children in hostels?",
        "Do hostels have family-friendly accommodations?"
    ],
    football: [
    "Do hostels show live football matches?",
    "Are there any football-related activities at the hostels?",
    "Can I book hostels near football stadiums?"
    ],
    childrenAndFootball: [
    "Can children attend football matches?",
    "Are there family-friendly football events nearby?",
    "What accommodations are available for families attending football games?"
    ],
    trips : [
        "Do hostels organise trips and activities?",
        "What types of activities can I participate in at hostels?",
        "Are local tours available through hostels?"
    ],
    activities: [
        "Do hostels organise trips and activities?",
        "What types of activities can I participate in at hostels?",
        "Are local tours available through hostels?"
    ],
    pets: [
        "Can I bring my pet when I stay at a hostel?",
        "Which hostels are pet-friendly?",
        "What are the pet policies at hostels?"
    ],
    wheelchair: [
        "What types of facilities are provided for wheelchair users?",
        "Are there accessible rooms in hostels?",
        "How can I find wheelchair-friendly hostels?"
    ],
    safety: [
        "What about safety and security in hostels?",
        "Do hostels provide lockers for valuables?",
        "How secure are hostel accommodations?"
    ],
    security: [
        "What about safety and security in hostels?",
        "Do hostels provide lockers for valuables?",
        "How secure are hostel accommodations?"
    ],
    identification: [
        "Do I need identification to stay at a hostel?",
        "What forms of ID are accepted at hostels?",
        "Is ID required for all guests?"
    ],
    travel: [
        "Do I need travel insurance for my hostel stay?",
        "What type of travel insurance is recommended?",
        "Can I purchase travel insurance through hostels?"
    ],
    insurance: [
        "Do I need travel insurance for my hostel stay?",
        "What type of travel insurance is recommended?",
        "Can I purchase travel insurance through hostels?"
    ],
    directions: [
        "Where can I get directions to HI hostels?",
        "How do I find my way to a hostel?",
        "Are there maps available for hostel locations?"
    ],
    luggage: [
        "What about luggage storage at hostels?",
        "Can I store my luggage before check-in?",
        "Do hostels offer lockers for luggage?"
    ],
    "sleeping bag": [
        "Do I need a sleeping bag or bedding?",
        "Are towels and bedding provided by hostels?",
        "Can I use my own bedding in hostels?"
    ],
    "towels": [
        "Do I need to bring towels to a hostel?",
        "Are towels included in the hostel price?",
        "Can I rent a towel at the hostel?"
    ],
    "check-in and check-out": [
        "What are the check-in and check-out times?",
        "Can I check in early or check out late?",
        "Is there flexibility with check-in/check-out times?"
    ],
    "amenities": [
        "What amenities are available at the hostel?",
        "Does the hostel provide free Wi-Fi?",
        "Are there common areas or lounges?"
    ],
    "minimum stay": [
        "Is there a minimum stay requirement?",
        "Can I book a single night at the hostel?",
        "What is the shortest duration I can stay?"
    ],
    "pricing": [
        "How much does it cost to stay at the hostel?",
        "What are the rates for different room types?",
        "Are prices per person or per room?"
    ],
    "discounts": [
        "Are there any discounts for longer stays?",
        "Do you offer group discounts?",
        "Can I use a promo code for my booking?"
    ],
    "cancellation policy": [
        "What is the cancellation policy?",
        "How far in advance can I cancel my booking?",
        "Are there any fees for late cancellations?"
    ],
    "room types": [
        "What types of rooms are available?",
        "Do you have mixed dorms or female-only dorms?",
        "Are there private rooms available?"
    ],
    "shared vs private": [
        "Are the rooms shared or private?",
        "Can I choose between a shared or private room?",
        "What are the benefits of staying in a shared room?"
    ],
    "wi-fi": [
        "Is there Wi-Fi available, and is it free?",
        "How strong is the Wi-Fi connection?",
        "Are there any restrictions on Wi-Fi usage?"
    ],
    "location": [
        "Where is the hostel located?",
        "Is the hostel in a central area?",
        "What is the address of the hostel?"
    ],
    "transportation": [
        "How do I get to the hostel from the nearest airport or train station?",
        "Are there public transport options nearby?",
        "Do you provide shuttle services?"
    ],
    "nearby attractions": [
        "Are there nearby attractions or public transport options?",
        "What can I explore around the hostel?",
        "Are there good restaurants close by?"
    ],
    "security measures": [
        "What security measures are in place?",
        "Is there 24-hour reception at the hostel?",
        "How are guests' belongings secured?"
    ],
    "lockers": [
        "Are there lockers available for personal belongings?",
        "Can I lock my valuables in a locker?",
        "Do I need to bring my own lock?"
    ],
    "area safety": [
        "Is the area safe for travelers?",
        "Should I be concerned about safety at night?",
        "What precautions should I take?"
    ],
    "age restrictions": [
        "Are there age restrictions for guests?",
        "Can younger travelers stay at the hostel?",
        "What is the minimum age for booking a room?"
    ],
    "guest policy": [
        "Can I bring guests to the hostel?",
        "Are visitors allowed in the rooms?",
        "What are the rules about guests?"
    ],
    "pets": [
        "What is the policy on pets?",
        "Can I bring my pet to the hostel?",
        "Are service animals allowed?"
    ],
    "events and tours": [
        "Does the hostel organize events or tours?",
        "Are there social activities for guests?",
        "Can I book tours through the hostel?"
    ],
    "kitchen facilities": [
        "Are there kitchen facilities for guests?",
        "Can I cook my own meals at the hostel?",
        "Is there a communal kitchen available?"
    ],
    "laundry service": [
        "Is there a laundry service available?",
        "Can I do my laundry at the hostel?",
        "Are there any fees for using laundry facilities?"
    ],
    "" : [
        "Who can stay at a hostel? Is there an age limit?",
        "Are there any discounts available?",
        "Tell me best room in less price",
    ]


}


export const getRelatedQuestions = (question) => {
    for(const [keyword, questions] of Object.entries(relatedQuestionsMap)) {
        if(question.includes(keyword)) {
            return questions
        }
    }
    return []
}


