import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "de",
    fallbackLng: "de",
    interpolation: {
      escapeValue: false,
    },
    resources:{
        en: {
            translation: {
                welcome: 'Welcome to Tropical Foods',
                quote:'Your One-Stop Asian & African Grocery Store in Essen',
                shopnow:'Shop Now',
                visitus:'Visit Us',
                introtitle:'Discover the authentic taste of home!',
                introdesc:"Located in the heart of Essen, Tropical Foods is your go-to destination for a wide variety of Asian and African groceries. Whether you're craving the rich spices of India, the aromatic flavors of Bangladesh, or the staple ingredients from Africa and Sri Lanka, we have something for everyone.",
                storetitle:'Bringing the Authentic Taste of Home to Your Table',
                storedescp1:"At Tropical Foods, we believe that food is more than just nourishment — it's a connection to your                culture, your family, and your memories. Located in the vibrant city of Essen, our retail store is a                beloved destination for food lovers across the region who are looking for authentic Asian and                African ingredients.",
                storedescp2:"We take pride in offering a diverse range of high-quality products from across the globe — including India, Pakistan, Bangladesh, Sri Lanka, and various parts of Africa. Whether you're cooking a spicy curry, steaming fragrant rice, or preparing traditional snacks, you'll find everything you need under one roof.",
                offer:'What We Offer',
                spices: {
                  title: "Authentic Spices",
                  items: ['Indian Masalas', 'Biryani Mixes', 'Curry Powders', 'Whole Spices']
                },
                rice: {
                  title: "Premium Rice",
                  items: ['Basmati', 'Sona Masoori', 'Jasmine', 'Red Rice']
                },
                lentils: {
                  title: "Flours & Lentils",
                  items: ['Atta', 'Besan', 'Urad Dal', 'Toor Dal']
                },
                frozen: {
                  title: "Fresh & Frozen",
                  items: ['Vegetables', 'Samosas', 'Parathas', 'Ready Meals']
                    
                  },
                  features:{
                    truck:{
                      title: 'Fast Delivery ( Coming Soon ! )',
                      description: 'Get your favorite groceries delivered quickly across Essen'
                    },
                    shield:{
                      title: 'Quality Guaranteed',
                      description: 'Authentic products sourced directly from producers'
                    },
                    clock:{
                      title: 'Fresh Stock',
                      description: 'Regular shipments ensure always-fresh ingredients'
                    }
                  },
                  cta:{
                    visit:'Visit Us in Essen Today!',
                    description:'Experience the best selection of Asian and African groceries in the Ruhr area.',
                    direction:'Get Directions',
                    products:'Browse Products'
                  },
                  footer:{
                    brand:'Tropical Food Store',
                    branddec:'Your trusted destination for authentic South Asian groceries, spices, and specialty foods. Quality, freshness, and authentic flavors in every product.',
                    products:['Shan Biryani Masala','Basmati Rice','Red Kidney Beans','Turmeric Powder','Aachi Sambar Powder','MDH Garam Masala'],
                  },
                  nav:{
                    home:'Home',
                    about:'About',
                    products:'Products',
                    services:'Offers',
                    contact:'Contact'
                  },
                  contact:{
                    get:'Get in',
                    touch:'Touch',
                    question:"Have questions about our tropical fruits or services? We're here to help! Reach out to our friendly team anytime.",
                    question2:'Still Have Questions?',
                    service:'Our customer service team is standing by to help you with any questions or concerns.',
                    whatsapp:'Connect on Whatsapp',
                    email:'Email Us',
                    headquaters:'Visit Our Germany Headquarters',
                    ourlocation:'Our Locations'
                  },
                  headquarters:'Headquarters',
                  product:{
                    title:{
                      tropical:'Tropical',
                      paradise:'Paradise'
                    },
                    subtitle:'Discover our premium collection of authentic South Asian spices, rice, lentils, and specialty foods sourced from the finest suppliers.',
                    nofilter:'Try adjusting your search or filter criteria',
                    noproduct:'No products found',
                    outofstock:'Out of Stock',
                    view:'View',
                    newsletter:'Stay Fresh with Our Newsletter',
                    deals:'Get exclusive deals and seasonal updates delivered to your inbox.',
                    subscribe:'Subscribe'
                  },
                  services:{
                    comingsoon:'Comming Soon'
                  },
                  about:{
                    values:{
                      heart:{
                        title:'Passion for Quality',
                        description:'Every fruit is carefully selected and inspected to ensure the highest quality standards.',
                      },
                      globe:{
                        title:'Global Sourcing',
                        description: 'We partner with farmers worldwide to bring you authentic tropical flavors from their origin.',
                      },
                      leaf:{
                        title: 'Sustainable Practices',
                        description: 'Committed to environmentally responsible sourcing and packaging methods.'
                      },
                      user:{
                        title: 'Customer First',
                        description: 'Your satisfaction is our priority, with personalized service and support.'
                      }
                    },
                    milestones: {
                      2020: {
                        title: "TropicalFresh Founded",
                        description: "Started with a dream to bring tropical fruits to everyone"
                      },
                      2021: {
                        title: "First Farm Partnership",
                        description: "Established relationships with premium tropical fruit farms"
                      },
                      2022: {
                        title: "10,000 Customers",
                        description: "Reached our first major customer milestone"
                      },
                      2023: {
                        title: "National Expansion",
                        description: "Extended delivery to all 50 states"
                      },
                      2024: {
                        title: "Sustainability Award",
                        description: "Recognized for our eco-friendly practices"
                      },
                      2025: {
                        title: "Global Reach",
                        description: "Expanding to serve customers worldwide"
                      },                    },
                    teamobj:{
                      founder:{
                        name: 'Maria Santos',
                        role: 'Founder & CEO',
                        bio: 'With 15 years in tropical agriculture, Maria founded TropicalFresh to share her passion for exotic fruits.',
                      },
                      operations:{
                        name: 'James Rodriguez',
                        role: 'Head of Operations',
                        bio: 'James ensures our supply chain delivers the freshest fruits with his logistics expertise.',
                      },
                      quality:{
                        name: 'Anna Chen',
                        role: 'Quality Director',
                        bio: 'Anna maintains our quality standards with her background in food science and nutrition.',
                      }
                    },
                    story:'Our Story of',
                    storydesc:"From a small family dream to a nationwide mission of bringing the world's finest tropical fruits to your table with love, care, and uncompromising quality.",
                    mission:'Our Mission',
                    missiondesc:'To make premium tropical fruits accessible to everyone while supporting sustainable farming practices and building lasting relationships with our farming partners around the world.',
                    vision:'Our Vision',
                    visiondesc:"To become the world's most trusted source for tropical fruits, creating a global community that celebrates the diversity and richness of tropical flavors while promoting healthy living.",
                    promise:'Quality Promise',
                    promisedesc:"Every fruit meets our strict quality standards or we'll make it right.",
                    corevalue:'Our Core Values',
                    principal:'The principles that guide everything we do at TropicalFresh.',
                    team:'Meet Our Team',
                    teamdesc:'The passionate people behind TropicalFresh, dedicated to bringing you the best tropical experience.',
                    join:'Join Our Tropical Family',
                    joindesc:'Become part of our growing community of tropical fruit enthusiasts and taste the difference quality makes.',
                    touch:'Get in Touch',
                    shopnow:'Shop Now',
                    journey:'Our Journey',
                    journeydesc:'Key milestones in our tropical fruit adventure.'
                  },
                  cookie:{
                    title:'Cookies & Privacy',
                    description:'We use cookies to ensure basic website functionality and, with your consent,to analyze website usage. We respect your privacy and comply with GDPR.',
                    readpolicy:'Read our Privacy Policy',
                    accept:'Accept All',
                    necessary:'Necessary Only',
                    customize:'Customize',
                    necessarycookie:'Necessary Cookies',
                    essential:'Essential for website functionality, shopping cart, and security.Cannot be disabled.',
                    legal:'Legal basis: Art. 6(1)(f) GDPR (legitimate interest)',
                    always:'Always On',
                    analytics:'Analytics Cookies',
                    analyticshelp:'Help us understand how visitors interact with our website (anonymized data only).',
                    analyticslegal:'Legal basis: Art. 6(1)(a) GDPR (consent)',
                    analyticsdata:'Data may be transferred to USA (Google Analytics)',
                    marketing:'Marketing Cookies',
                    marketingdesc:'Used for personalized advertising. Currently not implemented on our website.',
                    marketinglegal:'Legal basis: Art. 6(1)(a) GDPR (consent)',
                    rights:'Your Rights:',
                    rightsdesc:'You can change your preferences anytime, withdraw consent, or request data deletion. For questions, contact us at',
                    seeour:'or see our',
                    policy:'Cookie Policy',
                    preference:'Save My Preferences',
                    nonessential:'Reject Non-Essential',
                    disable:'Disabled'
                  }
                  
            }
        },
        de: {
          translation: {
            welcome: 'Willkommen bei Tropical Foods',
            quote: 'Ihr asiatischer und afrikanischer Lebensmittelladen in Essen',
            shopnow: 'Jetzt einkaufen',
            visitus: 'Besuchen Sie uns',
            introtitle: 'Entdecken Sie den authentischen Geschmack von Zuhause!',
            introdesc: 'Im Herzen von Essen gelegen, ist Tropical Foods Ihre erste Anlaufstelle für eine große Auswahl an asiatischen und afrikanischen Lebensmitteln. Ob Sie die würzigen Aromen Indiens, die duftenden Geschmäcker Bangladeschs oder die Grundnahrungsmittel aus Afrika und Sri Lanka suchen – bei uns finden Sie alles.',
            storetitle: 'Bringen Sie den authentischen Geschmack von Zuhause auf Ihren Tisch',
            storedescp1: 'Bei Tropical Foods glauben wir, dass Essen mehr ist als nur Nahrung – es ist eine Verbindung zu Ihrer Kultur, Ihrer Familie und Ihren Erinnerungen. Unser Geschäft in der lebendigen Stadt Essen ist ein beliebter Treffpunkt für Feinschmecker aus der ganzen Region, die auf der Suche nach authentischen asiatischen und afrikanischen Zutaten sind.',
            storedescp2: 'Wir sind stolz darauf, eine vielfältige Auswahl an hochwertigen Produkten aus der ganzen Welt anzubieten – darunter Indien, Pakistan, Bangladesch, Sri Lanka und verschiedene Teile Afrikas. Ob Sie ein würziges Curry kochen, duftenden Reis dämpfen oder traditionelle Snacks zubereiten – bei uns finden Sie alles unter einem Dach.',
            offer: 'Was wir anbieten',
          
            spices: {
              title: 'Authentische Gewürze',
              items: ['Indische Masalas', 'Biryani-Mischungen', 'Currypulver', 'Ganze Gewürze']
            },
            rice: {
              title: 'Premium-Reis',
              items: ['Basmati', 'Sona Masoori', 'Jasmin', 'Roter Reis']
            },
            lentils: {
              title: 'Mehle & Hülsenfrüchte',
              items: ['Atta (Weizenmehl)', 'Besan (Kichererbsenmehl)', 'Urad Dal', 'Toor Dal']
            },
            frozen: {
              title: 'Frisch & Tiefgekühlt',
              items: ['Gemüse', 'Samosas', 'Parathas', 'Fertiggerichte']
            },
          
            features: {
              truck: {
                title: 'Schnelle Lieferung (Demnächst verfügbar!)',
                description: 'Lassen Sie sich Ihre Lieblingsprodukte schnell in ganz Essen liefern'
              },
              shield: {
                title: 'Qualitätsgarantie',
                description: 'Authentische Produkte direkt vom Hersteller bezogen'
              },
              clock: {
                title: 'Frische Ware',
                description: 'Regelmäßige Lieferungen sorgen für stets frische Zutaten'
              }
            },
          
            cta: {
              visit: 'Besuchen Sie uns noch heute in Essen!',
              description: 'Erleben Sie die beste Auswahl an asiatischen und afrikanischen Lebensmitteln im Ruhrgebiet.',
              direction: 'Wegbeschreibung',
              products: 'Produkte durchsuchen'
            },
            footer: {
              brand: 'Tropical Food Store',
              branddec: 'Ihr vertrauenswürdiges Ziel für authentische südasiatische Lebensmittel, Gewürze und Spezialitäten. Qualität, Frische und authentische Aromen in jedem Produkt.',
              products: ['Shan Biryani Masala','Basmati-Reis','Rote Kidneybohnen','Kurkuma-Pulver','Aachi Sambar Pulver','MDH Garam Masala']
              
            },            
            nav: {
              home: 'Startseite',
              about: 'Über uns',
              products: 'Produkte',
              services: 'Angebote',
              contact: 'Kontakt'
            },
            contact: {
              get: 'Kontakt',
              touch: 'Aufnehmen',
              question: 'Haben Sie Fragen zu unseren tropischen Früchten oder Dienstleistungen? Wir helfen Ihnen gerne weiter! Kontaktieren Sie jederzeit unser freundliches Team.',
              question2: 'Noch Fragen?',
              service: 'Unser Kundenserviceteam steht Ihnen zur Verfügung, um Ihre Fragen oder Anliegen zu klären.',
              whatsapp: 'Verbinden Sie sich über WhatsApp',
              email: 'Schreiben Sie uns eine E-Mail',
              headquaters: 'Besuchen Sie unseren Hauptsitz in Deutschland',
              ourlocation: 'Unsere Standorte'
            },
            headquarters: 'Hauptsitz',
            product: {
              title: {
                tropical: 'Tropisches',
                paradise: 'Paradies'
              },
              subtitle: 'Entdecken Sie unsere Premium-Kollektion authentischer südasiatischer Gewürze, Reis, Linsen und Spezialitäten – bezogen von den besten Lieferanten.',
              nofilter: 'Versuchen Sie, Ihre Suche oder Filterkriterien anzupassen.',
              noproduct: 'Keine Produkte gefunden',
              outofstock: 'Nicht auf Lager',
              view: 'Ansehen',
              newsletter: 'Bleiben Sie frisch mit unserem Newsletter',
              deals: 'Erhalten Sie exklusive Angebote und saisonale Neuigkeiten direkt in Ihren Posteingang.',
              subscribe: 'Abonnieren'
            },
            services: {
              comingsoon: 'Kommt bald'
            },
            about: {
              values: {
                heart: {
                  title: 'Leidenschaft für Qualität',
                  description: 'Jede Frucht wird sorgfältig ausgewählt und geprüft, um höchste Qualitätsstandards zu gewährleisten.',
                },
                globe: {
                  title: 'Globale Beschaffung',
                  description: 'Wir arbeiten mit Landwirten weltweit zusammen, um authentische tropische Aromen direkt von der Quelle zu liefern.',
                },
                leaf: {
                  title: 'Nachhaltige Praktiken',
                  description: 'Verpflichtet zu umweltfreundlichen Beschaffungs- und Verpackungsmethoden.',
                },
                user: {
                  title: 'Kunde an erster Stelle',
                  description: 'Ihre Zufriedenheit hat für uns oberste Priorität – mit persönlichem Service und individueller Unterstützung.',
                }
              },
              milestones: {
                2020: {
                  title: "Gründung von TropicalFresh",
                  description: "Begann mit dem Traum, tropische Früchte für alle zugänglich zu machen"
                },
                2021: {
                  title: "Erste Partnerschaft mit einer Farm",
                  description: "Aufbau von Beziehungen zu Premium-Anbietern tropischer Früchte"
                },
                2022: {
                  title: "10.000 Kunden",
                  description: "Erreichen unseres ersten großen Kundenmeilensteins"
                },
                2023: {
                  title: "Nationale Expansion",
                  description: "Lieferung auf alle 50 Bundesstaaten ausgeweitet"
                },
                2024: {
                  title: "Nachhaltigkeitspreis",
                  description: "Auszeichnung für unsere umweltfreundlichen Praktiken"
                },
                2025: {
                  title: "Globale Reichweite",
                  description: "Expansion zur weltweiten Versorgung von Kunden"
                },
                
              },
              story: 'Unsere Geschichte von',
                storydesc: "Von einem kleinen Familientraum zur landesweiten Mission, die besten tropischen Früchte der Welt mit Liebe, Sorgfalt und kompromissloser Qualität auf Ihren Tisch zu bringen.",
                mission: 'Unsere Mission',
                missiondesc: 'Premium-Tropenfrüchte für alle zugänglich zu machen, nachhaltige Landwirtschaft zu fördern und langfristige Partnerschaften mit Landwirten weltweit aufzubauen.',
                vision: 'Unsere Vision',
                visiondesc: "Die weltweit vertrauenswürdigste Quelle für tropische Früchte zu werden und eine globale Gemeinschaft zu schaffen, die Vielfalt und Reichtum tropischer Aromen feiert und gesundes Leben fördert.",
                promise: 'Qualitätsversprechen',
                promisedesc: "Jede Frucht erfüllt unsere strengen Qualitätsstandards – oder wir sorgen für Ersatz.",
                corevalue: 'Unsere Grundwerte',
                principal: 'Die Prinzipien, die unser Handeln bei TropicalFresh leiten.',
                team: 'Unser Team',
                teamdesc: 'Die leidenschaftlichen Menschen hinter TropicalFresh, die sich der besten tropischen Erfahrung verschrieben haben.',
                teamobj: {
                  founder: {
                    name: 'Maria Santos',
                    role: 'Gründerin & Geschäftsführerin',
                    bio: 'Mit 15 Jahren Erfahrung in der tropischen Landwirtschaft gründete Maria TropicalFresh, um ihre Leidenschaft für exotische Früchte zu teilen.',
                  },
                  operations: {
                    name: 'James Rodriguez',
                    role: 'Leiter der Betriebsabteilung',
                    bio: 'James sorgt mit seiner Logistikexpertise dafür, dass unsere Lieferkette stets die frischesten Früchte bereitstellt.',
                  },
                  quality: {
                    name: 'Anna Chen',
                    role: 'Qualitätsdirektorin',
                    bio: 'Anna sichert mit ihrem Hintergrund in Ernährungswissenschaften unsere hohen Qualitätsstandards.',
                  }
                },
                join: "Werde Teil unserer Tropenfamilie",
                joindesc: "Werde Teil unserer wachsenden Gemeinschaft von Liebhabern tropischer Früchte und erlebe den Unterschied, den Qualität macht.",
                touch: "Kontakt aufnehmen",
                shopnow: "Jetzt einkaufen",
                journey: 'Unsere Reise',
                journeydesc: 'Wichtige Meilensteine unseres tropischen Fruchtabenteuers.'
            },
            cookie: {
              title: 'Cookies & Datenschutz',
              description: 'Wir verwenden Cookies, um die grundlegende Funktionalität der Website sicherzustellen und – mit Ihrer Zustimmung – die Nutzung der Website zu analysieren. Wir respektieren Ihre Privatsphäre und halten uns an die DSGVO.',
              readpolicy: 'Lesen Sie unsere Datenschutzrichtlinie',
              accept: 'Alle akzeptieren',
              necessary: 'Nur notwendige',
              customize: 'Anpassen',
              necessarycookie: 'Notwendige Cookies',
              essential: 'Wesentlich für die Funktionalität der Website, Warenkorb und Sicherheit. Kann nicht deaktiviert werden.',
              legal: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)',
              always: 'Immer aktiviert',
              analytics: 'Analyse-Cookies',
              analyticshelp: 'Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren (nur anonymisierte Daten).',
              analyticslegal: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
              analyticsdata: 'Daten können in die USA übertragen werden (Google Analytics)',
              marketing: 'Marketing-Cookies',
              marketingdesc: 'Verwendet für personalisierte Werbung. Derzeit nicht auf unserer Website implementiert.',
              marketinglegal: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
              rights: 'Ihre Rechte:',
              rightsdesc: 'Sie können Ihre Präferenzen jederzeit ändern, die Einwilligung widerrufen oder die Löschung von Daten verlangen. Bei Fragen kontaktieren Sie uns unter',
              seeour: 'oder sehen Sie unsere',
              policy: 'Cookie-Richtlinie',
              preference: 'Meine Präferenzen speichern',
              nonessential: 'Nicht notwendige ablehnen',
              disable: 'Deaktiviert'
            }
            
            
          }
          
        },

        
    },
  });

export default i18n;