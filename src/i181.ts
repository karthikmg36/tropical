import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { products } from '/Data/products';

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
                      title: 'Fast Delivery',
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
                    services:'Services',
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
                title: 'Schnelle Lieferung',
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
              services: 'Dienstleistungen',
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
            }
            
          }
          
        },

        
    },
  });

export default i18n;