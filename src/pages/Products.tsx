
import { useState, useEffect } from 'react';
import {
  Search,
  Star,
  Heart,
  Eye,
  ArrowRight,
} from 'lucide-react';

const BadgeLabel = ({ label }: { label: string }) => {
  const badgeStyles: { [key: string]: string } = {
    'Best Seller': 'bg-green-700',
    'New': 'bg-green-600',
    'Organic': 'bg-green-800',
    'Premium': 'bg-green-900',
  };

  const bgColor = badgeStyles[label] || 'bg-green-800';

  return (
      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg ${bgColor} select-none`}>
        {label}
      </div>
  );
};

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const categories = [
    { id: 'all', name: 'All Products', count: 89 },
    { id: 'spice-mixes', name: 'Spice Mixes', count: 25 },
    { id: 'rice-grains', name: 'Rice & Grains', count: 18 },
    { id: 'lentils-beans', name: 'Lentils & Beans', count: 15 },
    { id: 'ready-meals', name: 'Ready Meals', count: 12 },
    { id: 'snacks', name: 'Snacks', count: 8 },
    { id: 'condiments', name: 'Condiments', count: 7 },
    { id: 'beverages', name: 'Beverages', count: 4 },
  ];

  const products = [
    {
      id: 1,
      name: "TRS MADRAS CURRY POWDER (MILD)",
      category: "spice-mixes",
      price: 0.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/mild-madras-curry-powder.jpg",
      rating: 4.5,
      reviews: 120,
      description: "Mild Madras curry powder for authentic South Indian flavors",
      inStock: true,
    },
    {
      id: 2,
      name: "TRS GARAM MASALA POWDER",
      category: "spice-mixes",
      price: 1.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/garam-masala-powder1.jpg",
      rating: 4.7,
      reviews: 210,
      description: "Traditional Indian garam masala spice blend",
      badge: "⚡ HIGHLIGHT",
      inStock: true,
    },
    {
      id: 3,
      name: "TRS CHILLI POWDER",
      category: "spice-mixes",
      price: 1.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_chilli_powder.jpg",
      rating: 4.3,
      reviews: 95,
      description: "Hot and spicy chili powder for authentic heat",
      inStock: true,
    },
    {
      id: 4,
      name: "TRS KEWRA WATER - 190ML",
      category: "condiments",
      price: 1.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_kewra_water.jpg",
      rating: 4.2,
      reviews: 78,
      description: "Fragrant kewra water for flavoring sweets and biryanis",
      size: "190ML",
      inStock: true,
    },
    {
      id: 5,
      name: "TRS CLOVES",
      category: "spice-mixes",
      price: 2.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/002/trs_cloves2.jpg",
      rating: 4.6,
      reviews: 145,
      description: "Whole cloves for aromatic flavor in dishes",
      inStock: true,
    },
    {
      id: 6,
      name: "TRS BROWN MUSTARD SEEDS",
      category: "spice-mixes",
      price: 1.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/brown-mustard-seeds3.jpg",
      rating: 4.1,
      reviews: 67,
      description: "Brown mustard seeds for tempering and pickling",
      inStock: true,
    },
    {
      id: 7,
      name: "TRS CHICK PEAS",
      category: "lentils-beans",
      price: 1.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_chick_peas.jpg",
      rating: 4.4,
      reviews: 112,
      description: "High quality chick peas for curries and snacks",
      inStock: true,
    },
    {
      id: 8,
      name: "TRS BLACK CARDAMOM LARGE",
      category: "spice-mixes",
      price: 2.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/002/trs_black_cardamom2.jpg",
      rating: 4.5,
      reviews: 134,
      description: "Large black cardamom pods for rich flavor",
      inStock: true,
    },
    {
      id: 9,
      name: "TRS ANARDANA WHOLE (POMEGRANATE SEEDS) 100G",
      category: "spice-mixes",
      price: 1.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_anardana_whole2.jpg",
      rating: 4.3,
      reviews: 89,
      description: "Dried pomegranate seeds for tangy flavor",
      size: "100G",
      inStock: true,
    },
    {
      id: 10,
      name: "TRS CHANA DAL YELLOW",
      category: "lentils-beans",
      price: 2.29,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_chana_dal1.jpg",
      rating: 4.6,
      reviews: 156,
      description: "Yellow split chickpeas for delicious dals",
      inStock: true,
    },
    {
      id: 11,
      name: "TRS MADRAS CURRY POWDER (HOT)",
      category: "spice-mixes",
      price: 0.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/hot-madras-curry-powder.jpg",
      rating: 4.7,
      reviews: 189,
      description: "Hot Madras curry powder for spicy dishes",
      inStock: true,
    },
    {
      id: 12,
      name: "TRS JAVENTRY MACE - 50G",
      category: "spice-mixes",
      price: 5.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_javentry_mace.jpg",
      rating: 4.4,
      reviews: 76,
      description: "Premium mace for aromatic dishes",
      size: "50G",
      inStock: true,
    },
    {
      id: 13,
      name: "TRS FENNEL SEEDS",
      category: "spice-mixes",
      price: 1.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_fennel_seed2.jpg",
      rating: 4.3,
      reviews: 98,
      description: "Sweet fennel seeds for digestion and flavor",
      inStock: true,
    },
    {
      id: 14,
      name: "TRS BROWN CHICK PEAS - KALA CHANA",
      category: "lentils-beans",
      price: 2.29,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_kala_chana.jpg",
      rating: 4.5,
      reviews: 123,
      description: "Nutritious brown chickpeas for curries",
      inStock: true,
    },
    {
      id: 15,
      name: "TRS TOOR DAL - SPLIT PIGEON PEAS",
      category: "lentils-beans",
      price: 2.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_toor_dal2.jpg",
      rating: 4.6,
      reviews: 178,
      description: "Split pigeon peas for traditional Indian dals",
      inStock: true,
    },
    {
      id: 16,
      name: "TRS PAPRIKA POWDER",
      category: "spice-mixes",
      price: 1.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/paprika-powder.jpg",
      rating: 4.2,
      reviews: 87,
      description: "Mild red paprika powder for color and flavor",
      inStock: true,
    },
    {
      id: 17,
      name: "TRS STAR ANISE (BADIAN STERNANIS) 50G",
      category: "spice-mixes",
      price: 2.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/001/trs_star_aniseed_2.jpg",
      rating: 4.5,
      reviews: 112,
      description: "Star anise for aromatic Chinese and Indian dishes",
      size: "50G",
      inStock: true,
    },
    {
      id: 18,
      name: "TRS URID BEANS - WHOLE BLACK BEANS",
      category: "lentils-beans",
      price: 2.79,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_urid_beans.jpg",
      rating: 4.4,
      reviews: 103,
      description: "Whole black beans for traditional Indian cooking",
      inStock: true,
    },
    {
      id: 19,
      name: "TRS MUNG BEANS",
      category: "lentils-beans",
      price: 2.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_mung_beans1.jpg",
      rating: 4.6,
      reviews: 145,
      description: "Whole mung beans for sprouts and curries",
      inStock: true,
    },
    {
      id: 20,
      name: "TRS AMCHUR, DRIED MANGO POWDER (100G)",
      category: "spice-mixes",
      price: 2.19,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_amchur_powder.jpg",
      rating: 4.3,
      reviews: 89,
      description: "Tangy dried mango powder for flavoring dishes",
      size: "100G",
      inStock: true,
    },
    {
      id: 21,
      name: "TRS AJWAIN, AJOWAN (LOVAGE SEED)",
      category: "spice-mixes",
      price: 1.89,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/ajwain1.jpg",
      rating: 4.2,
      reviews: 87,
      description: "Ajwain seeds for digestive and aromatic purposes",
      inStock: true,
    },
    {
      id: 22,
      name: "TRS CUMIN POWDER",
      category: "spice-mixes",
      price: 2.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/jeera-powder.jpg",
      rating: 4.4,
      reviews: 156,
      description: "Ground cumin powder for authentic Indian flavors",
      inStock: true,
    },
    {
      id: 23,
      name: "TRS RED SPLIT LENTILS",
      category: "lentils-beans",
      price: 2.19,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_masoor_dal.jpg",
      rating: 4.5,
      reviews: 134,
      description: "Red split lentils for quick cooking dals",
      inStock: true,
    },
    {
      id: 24,
      name: "TRS URID DAL WHITE",
      category: "lentils-beans",
      price: 2.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_urid_dal.jpg",
      rating: 4.3,
      reviews: 98,
      description: "White split black gram for South Indian dishes",
      inStock: true,
    },
    {
      id: 25,
      name: "TRS CRUSHED CHILLIES (EXTRA HOT)",
      category: "spice-mixes",
      price: 1.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/crushed-red-chillies.jpg",
      rating: 4.6,
      reviews: 167,
      description: "Extra hot crushed red chillies for heat lovers",
      inStock: true,
    },
    {
      id: 26,
      name: "TRS CUMIN JEERA SEEDS (CUMIN WHOLE)",
      category: "spice-mixes",
      price: 2.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_cumin_seeds3.jpg",
      rating: 4.4,
      reviews: 143,
      description: "Whole cumin seeds for tempering and grinding",
      inStock: true,
    },
    {
      id: 27,
      name: "TRS MUNG DAL CHILKA (SPLIT UNPEELED GREEN LENTIL)",
      category: "lentils-beans",
      price: 2.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/002/trs_mung_dal_chilka_500g.jpg",
      rating: 4.3,
      reviews: 89,
      description: "Split green lentils with skin for nutritious meals",
      inStock: true,
    },
    {
      id: 28,
      name: "TRS DALCHINI POWDER (CINNAMON POWDER) 100G",
      category: "spice-mixes",
      price: 1.79,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/trs-cinnamon-powder.jpg",
      rating: 4.2,
      reviews: 76,
      description: "Fine cinnamon powder for sweet and savory dishes",
      size: "100G",
      inStock: true,
    },
    {
      id: 29,
      name: "TRS BLACK EYE BEANS - LOBIA",
      category: "lentils-beans",
      price: 2.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/002/trs_black_eye_beans_500g.jpg",
      rating: 4.1,
      reviews: 67,
      description: "Black eye beans for nutritious curries and salads",
      inStock: true,
    },
    {
      id: 30,
      name: "TRS BLACK PEPPER WHOLE",
      category: "spice-mixes",
      price: 2.19,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_black_pepper_whole2.jpg",
      rating: 4.5,
      reviews: 198,
      description: "Whole black peppercorns for fresh grinding",
      inStock: true,
    },
    {
      id: 31,
      name: "TRS METHI FENUGREEK SEEDS",
      category: "spice-mixes",
      price: 1.29,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/002/trs_methi_seeds3.jpg",
      rating: 4.0,
      reviews: 54,
      description: "Fenugreek seeds for health benefits and flavor",
      inStock: true,
    },
    {
      id: 32,
      name: "TRS CORIANDER POWDER (DHANIA POWDER)",
      category: "spice-mixes",
      price: 1.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/dhania-powder.jpg",
      rating: 4.3,
      reviews: 167,
      description: "Ground coriander powder for everyday cooking",
      inStock: true,
    },
    {
      id: 33,
      name: "TRS BLACK PEPPER POWDER",
      category: "spice-mixes",
      price: 2.29,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/black-pepper-powder.jpg",
      rating: 4.4,
      reviews: 89,
      description: "Freshly ground black pepper powder",
      inStock: true,
    },
    {
      id: 34,
      name: "TRS BLACK SALT POWDER (100G)",
      category: "spice-mixes",
      price: 1.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/old_images/13884_0.jpg",
      rating: 4.2,
      reviews: 78,
      description: "Black salt powder for digestive benefits",
      size: "100G",
      inStock: true,
    },
    {
      id: 35,
      name: "TRS RED KIDNEY BEANS",
      category: "lentils-beans",
      price: 2.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/trs_red_kidney_beans.jpg",
      rating: 4.5,
      reviews: 123,
      description: "Premium red kidney beans for rajma curry",
      inStock: true,
    },
    {
      id: 36,
      name: "TRS HALDI POWDER (TURMERIC)",
      category: "spice-mixes",
      price: 1.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/haldi-powder.jpg",
      rating: 4.6,
      reviews: 234,
      description: "Pure turmeric powder for health and color",
      inStock: true,
    },
    {
      id: 37,
      name: "TRS MAMRA PUFFED RICE",
      category: "rice-grains",
      price: 1.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/001/trs_mamra_puffed_rice.jpg",
      rating: 4.1,
      reviews: 56,
      description: "Puffed rice for bhel puri and snacks",
      inStock: true,
    },
    {
      id: 38,
      name: "TRS TANDOORI MASALA POWDER",
      category: "spice-mixes",
      price: 2.49,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/tandoori-masala-powder.jpg",
      rating: 4.4,
      reviews: 134,
      description: "Tandoori masala blend for authentic flavors",
      inStock: true,
    },
    {
      id: 39,
      name: "TRS GREEN CARDAMOM",
      category: "spice-mixes",
      price: 3.99,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/003/green_cardamon1.jpeg",
      rating: 4.7,
      reviews: 189,
      description: "Premium green cardamom pods for desserts",
      inStock: true,
    },
    {
      id: 40,
      name: "TRS GRAM FLOUR (BESAN)",
      category: "flour-semolina",
      price: 2.19,
      image: "https://www.india-store.de/images/thumbnail/produkte/small/food01/002/trs-gram-flour.jpg",
      rating: 4.3,
      reviews: 167,
      description: "Chickpea flour for pakoras and sweets",
      inStock: true,
    },
    {
      "id": 41,
      "name": "Soya Nuggets",
      "category": "soy-products",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/1.Soya%20Nuggets_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "High protein soya nuggets for healthy cooking",
      "inStock": true
    },
    {
      "id": 42,
      "name": "Matta Rice 10kg",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/2.Matta%20Rice%2010kg_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality matta rice 10kg for authentic cooking",
      "inStock": true
    },
    {
      "id": 43,
      "name": "Ponni Rice 10kg",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/3.Ponni%20Rice%2010kg_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality ponni rice 10kg for authentic cooking",
      "inStock": true
    },
    {
      "id": 44,
      "name": "Ragi Flour",
      "category": "flour",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/4.Ragi%20Flour_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Fresh ragi flour for traditional recipes",
      "inStock": true
    },
    {
      "id": 45,
      "name": "Idli Rice",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/5.Idli%20Rice_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality idli rice for authentic cooking",
      "inStock": true
    },
    {
      "id": 46,
      "name": "Red Rice Flakes",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/6.Red%20Rice%20Flakes_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality red rice flakes for authentic cooking",
      "inStock": true
    },
    {
      "id": 47,
      "name": "Bajra Flour",
      "category": "flour",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/7.Bajra%20Flour_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Fresh bajra flour for traditional recipes",
      "inStock": true
    },
    {
      "id": 48,
      "name": "Roasted Urid Flour",
      "category": "flour",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/8.Roasted%20Urid%20Flour_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Fresh roasted urid flour for traditional recipes",
      "inStock": true
    },
    {
      "id": 49,
      "name": "Roasted Moong Dal Flour",
      "category": "flour",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/9.Roasted%20Moong%20Dal%20Flour_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Fresh roasted moong dal flour for traditional recipes",
      "inStock": true
    },
    {
      "id": 50,
      "name": "White Rice Flakes",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/10.White%20Rice%20Flakes_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality white rice flakes for authentic cooking",
      "inStock": true
    },
    {
      "id": 51,
      "name": "Rosted Rava",
      "category": "semolina",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/11.Rosted%20Rava_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality rosted rava from Amutha Brand",
      "inStock": true
    },
    {
      "id": 52,
      "name": "Madras Plain Pappadoms",
      "category": "snacks",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/12.Madras%20Plain%20Pappadoms_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality madras plain pappadoms from Amutha Brand",
      "inStock": true
    },
    {
      "id": 53,
      "name": "Green Cardamom",
      "category": "spices",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/13.Green%20Cardamom_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality green cardamom from Amutha Brand",
      "inStock": true
    },
    {
      "id": 54,
      "name": "Whole Chilli Without Stem",
      "category": "spices",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/14.Whole%20Chilli%20Without%20Stem_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality whole chilli without stem from Amutha Brand",
      "inStock": true
    },
    {
      "id": 55,
      "name": "Whole Chilli With Stem",
      "category": "spices",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/15.Whole%20Chilli%20With%20Stem_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality whole chilli with stem from Amutha Brand",
      "inStock": true
    },
    {
      "id": 56,
      "name": "Soya Nuggets Ball 250Gm",
      "category": "soy-products",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/16.Soya%20Nuggets%20Ball%20250Gm_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "High protein soya nuggets ball 250gm for healthy cooking",
      "inStock": true
    },
    {
      "id": 57,
      "name": "Chilli Flakes",
      "category": "spices",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/17.Chilli%20Flakes_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality chilli flakes from Amutha Brand",
      "inStock": true
    },
    {
      "id": 58,
      "name": "Ponni Rice 1Kg",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/18.Ponni%20Rice%201Kg_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality ponni rice 1kg for authentic cooking",
      "inStock": true
    },
    {
      "id": 59,
      "name": "Seeraga Samba Rice 1kg",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/19.Seeraga%20Samba%20Rice%201kg_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality seeraga samba rice 1kg for authentic cooking",
      "inStock": true
    },
    {
      "id": 60,
      "name": "White Jaggery Cube",
      "category": "sweeteners",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/20.White%20Jaggery%20Cube_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality white jaggery cube from Amutha Brand",
      "inStock": true
    },
    {
      "id": 61,
      "name": "White Jaggery Powder",
      "category": "sweeteners",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/21.White%20Jaggery%20Powder_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality white jaggery powder from Amutha Brand",
      "inStock": true
    },
    {
      "id": 62,
      "name": "White Jaggery Ball",
      "category": "sweeteners",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/22.White%20Jaggery%20Ball_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality white jaggery ball from Amutha Brand",
      "inStock": true
    },
    {
      "id": 63,
      "name": "Roasted Brown Gram",
      "category": "lentils",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/23.Roasted%20Brown%20Gram_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality roasted brown gram from Amutha Brand",
      "inStock": true
    },
    {
      "id": 64,
      "name": "Semiya",
      "category": "noodles",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/24.Semiya_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality semiya from Amutha Brand",
      "inStock": true
    },
    {
      "id": 65,
      "name": "Soya Nuggets Ball 500Gm",
      "category": "soy-products",
      "price": 0.0,
      "image": "http://amuthabrand.com/product//25.Soya%20Nuggets%20Ball%20500Gm_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "High protein soya nuggets ball 500gm for healthy cooking",
      "inStock": true
    },
    {
      "id": 66,
      "name": "Roasted Gram",
      "category": "lentils",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/26.Roasted%20Gram_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality roasted gram from Amutha Brand",
      "inStock": true
    },
    {
      "id": 67,
      "name": "Roasted Moong Beans",
      "category": "lentils",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/27.Roasted%20Moong%20Beans_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality roasted moong beans from Amutha Brand",
      "inStock": true
    },
    {
      "id": 68,
      "name": "Chemba Puttu Podi",
      "category": "flour",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/28.Chemba%20Puttu%20Podi_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality chemba puttu podi from Amutha Brand",
      "inStock": true
    },
    {
      "id": 69,
      "name": "Roasted Yellow Peas",
      "category": "lentils",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/29.Roasted%20Yellow%20Peas_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality roasted yellow peas from Amutha Brand",
      "inStock": true
    },
    {
      "id": 70,
      "name": "Samba Wheat Puttu Podi",
      "category": "flour",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/30.Samba%20Wheat%20Puttu%20Podi_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality samba wheat puttu podi from Amutha Brand",
      "inStock": true
    },
    {
      "id": 71,
      "name": "Red Raw Rice",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/31.Red%20Raw%20Rice_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality red raw rice for authentic cooking",
      "inStock": true
    },
    {
      "id": 72,
      "name": "Garlic Murukku",
      "category": "snacks",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/40.Garlic%20Murukku_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality garlic murukku from Amutha Brand",
      "inStock": true
    },
    {
      "id": 73,
      "name": "Mini Butter Murukku",
      "category": "snacks",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/41.Mini%20Butter%20Murukku_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality mini butter murukku from Amutha Brand",
      "inStock": true
    },
    {
      "id": 74,
      "name": "Mixture Mild",
      "category": "snacks",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/42.Mixture%20Mild_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality mixture mild from Amutha Brand",
      "inStock": true
    },
    {
      "id": 75,
      "name": "Kerala Spical Mixture",
      "category": "snacks",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/43.Kerala%20Spical%20Mixture_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality kerala spical mixture from Amutha Brand",
      "inStock": true
    },
    {
      "id": 76,
      "name": "Banana Chips Sweet 150Gm",
      "category": "chips",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/44.Banana%20Chips%20Sweet%20150Gm_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Crispy and delicious banana chips sweet 150gm",
      "inStock": true
    },
    {
      "id": 77,
      "name": "Banana Chips Spicy 150Gm",
      "category": "chips",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/45.Banana%20Chips%20Spicy%20150Gm_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Crispy and delicious banana chips spicy 150gm",
      "inStock": true
    },
    {
      "id": 78,
      "name": "Casava Chips Spicy",
      "category": "chips",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/46.Casava%20Chips%20Spicy_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Crispy and delicious casava chips spicy",
      "inStock": true
    },
    {
      "id": 79,
      "name": "Banana Chips Salt 150Gm",
      "category": "chips",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/47.Banana%20Chips%20Salt%20150Gm_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Crispy and delicious banana chips salt 150gm",
      "inStock": true
    },
    {
      "id": 80,
      "name": "Banana Chips Spicy 80Gm",
      "category": "chips",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/48.Banana%20Chips%20Spicy%2080Gm_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Crispy and delicious banana chips spicy 80gm",
      "inStock": true
    },
    {
      "id": 81,
      "name": "Jackfruit Chips",
      "category": "chips",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/49.Jackfruit%20Chips_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Crispy and delicious jackfruit chips",
      "inStock": true
    },
    {
      "id": 82,
      "name": "Banana Chips Salt 80Gm",
      "category": "chips",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/50.Banana%20Chips%20Salt%2080Gm_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Crispy and delicious banana chips salt 80gm",
      "inStock": true
    },
    {
      "id": 83,
      "name": "Little Millet",
      "category": "millets",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/51.Little%20Millet_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Nutritious little millet for healthy diet",
      "inStock": true
    },
    {
      "id": 84,
      "name": "Foxtail Millet",
      "category": "millets",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/52.Foxtail%20Millet_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Nutritious foxtail millet for healthy diet",
      "inStock": true
    },
    {
      "id": 85,
      "name": "Barley Rice",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/53.Barley%20Rice_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality barley rice for authentic cooking",
      "inStock": true
    },
    {
      "id": 86,
      "name": "Bajra Millet",
      "category": "millets",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/54.Bajra%20Millet_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Nutritious bajra millet for healthy diet",
      "inStock": true
    },
    {
      "id": 87,
      "name": "Kodo Millet",
      "category": "millets",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/56.Kodo%20Millet_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Nutritious kodo millet for healthy diet",
      "inStock": true
    },
    {
      "id": 88,
      "name": "Barnyard Millet",
      "category": "millets",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/57.Barnyard%20Millet_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Nutritious barnyard millet for healthy diet",
      "inStock": true
    },
    {
      "id": 89,
      "name": "Finger Millet",
      "category": "millets",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/58.Finger%20Millet_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Nutritious finger millet for healthy diet",
      "inStock": true
    },
    {
      "id": 90,
      "name": "Chukku Coffee",
      "category": "beverages",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/59.Chukku%20Coffee_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality chukku coffee from Amutha Brand",
      "inStock": true
    },
    {
      "id": 91,
      "name": "Asafoetida",
      "category": "spices",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/60.Asafoetida_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality asafoetida from Amutha Brand",
      "inStock": true
    },
    {
      "id": 92,
      "name": "Ponni Rice 5Kg/h3>",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/61.Ponni%20Rice%205Kg_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality ponni rice 5kg/h3> for authentic cooking",
      "inStock": true
    },
    {
      "id": 93,
      "name": "Sonamasoori Rice 5Kg",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/62.Sonamasoori%20Rice%205Kg_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality sonamasoori rice 5kg for authentic cooking",
      "inStock": true
    },
    {
      "id": 94,
      "name": "Palappam Mix Flour",
      "category": "flour",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/63.Palappam%20Mix%20Flour_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Fresh palappam mix flour for traditional recipes",
      "inStock": true
    },
    {
      "id": 95,
      "name": "White Idiyappam Flour",
      "category": "flour",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/64.White%20Idiyappam%20Flour_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Fresh white idiyappam flour for traditional recipes",
      "inStock": true
    },
    {
      "id": 96,
      "name": "Roasted Gram",
      "category": "lentils",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/65.Roasted%20Gram_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Quality roasted gram from Amutha Brand",
      "inStock": true
    },
    {
      "id": 97,
      "name": "Chemba Idiyappam Flour",
      "category": "flour",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/66.Chemba%20Idiyappam%20Flour_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Fresh chemba idiyappam flour for traditional recipes",
      "inStock": true
    },
    {
      "id": 98,
      "name": "Dosa Mix Flour",
      "category": "flour",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/67.Dosa%20Mix%20Flour_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Fresh dosa mix flour for traditional recipes",
      "inStock": true
    },
    {
      "id": 99,
      "name": "Idly Mix Flour",
      "category": "flour",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/68.Idly%20Mix%20Flour_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Fresh idly mix flour for traditional recipes",
      "inStock": true
    },
    {
      "id": 100,
      "name": "Seeraga Samba Rice 5Kg",
      "category": "rice",
      "price": 0.0,
      "image": "http://amuthabrand.com/product/69.Seeraga%20Samba%20Rice%205Kg_prev_ui.png",
      "rating": 0,
      "reviews": 0,
      "description": "Premium quality seeraga samba rice 5kg for authentic cooking",
      "inStock": true
    },
    {
      "id": 101,
      "name": "ALOE VERA JUICE",
      "category": "JUICE",
      "price": 0.0,
      "image": "http://www.annambrand.com/dashboard/assets/images/product/13565855645c3f34ea793c9pro.jpg",
      "weight": "500ml",
      "description": "Including Weight this product - 500ml",
      "inStock": true
    },
    {
      "id": 102,
      "name": "ALPHONSO MANGO PULP",
      "category": "JUICE",
      "price": 0.0,
      "image": "http://www.annambrand.com/dashboard/assets/images/product/11792610505c487930169cepro.jpg",
      "weight": "850g",
      "description": "Including Weight this product - 850g",
      "inStock": true
    },
    {
      "id": 103,
      "name": "AMLA JUICE",
      "category": "JUICE",
      "price": 0.0,
      "image": "http://www.annambrand.com/dashboard/assets/images/product/21294930955c3f33bf2ce9bpro.jpg",
      "weight": "500ml",
      "description": "Including Weight this product - 500ml",
      "inStock": true
    },
    {
      "id": 104,
      "name": "AMLA PICKLE",
      "category": "PICKEL & PASTE",
      "price": 0.0,
      "image": "http://www.annambrand.com/dashboard/assets/images/product/2873809535c47596d18a34pro.JPG",
      "weight": "300g",
      "description": "Including Weight this product - 300g",
      "inStock": true
    },
    {
      "id": 105,
      "name": "Annam Coriander leaves Pickle",
      "category": "PICKEL & PASTE",
      "price": 0.0,
      "image": "http://www.annambrand.com/dashboard/assets/images/product/1485658635c3dfce7106c7pro.jpg",
      "weight": "300g",
      "description": "Including Weight this product - 300g",
      "inStock": true
    },
    {
      "id": 106,
      "name": "Annam Curry Leaves Pickle",
      "category": "PICKEL & PASTE",
      "price": 0.0,
      "image": "http://www.annambrand.com/dashboard/assets/images/product/4089037845c3dfdbe0c9afpro.jpg",
      "weight": "300g",
      "description": "Including Weight this product - 300g",
      "inStock": true
    },
    {
      "id": 107,
      "name": "Annam Garlic Pickle",
      "category": "PICKEL & PASTE",
      "price": 0.0,
      "image": "http://www.annambrand.com/dashboard/assets/images/product/8357082345c3dfe0055185pro.jpg",
      "weight": "300g",
      "description": "Including Weight this product - 300g",
      "inStock": true
    },
    {
      "id": 108,
      "name": "Annam Jaffna Curry powder extra hot",
      "category": "SPICE",
      "price": 0.0,
      "image": "http://www.annambrand.com/dashboard/assets/images/product/2481299455c3e07f201230pro.jpg",
      "weight": "250g , 450g , 900g , 3kg",
      "description": "Including Weight this product - 250g , 450g , 900g , 3kg",
      "inStock": true
    },
    {
      "id": 109,
      "name": "annam karela juice",
      "category": "JUICE",
      "price": 0.0,
      "image": "http://www.annambrand.com/dashboard/assets/images/product/70204275c3f0c6971477pro.jpg",
      "weight": "500ml",
      "description": "Including Weight this product - 500ml",
      "inStock": true
    },
    {
      "id": 110,
      "name": "Annam moong whole",
      "category": "BEANS",
      "price": 0.0,
      "image": "http://www.annambrand.com/dashboard/assets/images/product/8361884135c3df6de75ed2pro.jpg",
      "weight": "500g , 1kg , 2kg",
      "description": "Including Weight this product - 500g , 1kg , 2kg",
      "inStock": true
    }
  ];

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
      <div className="pt-16 min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Tropical <span className="block text-yellow-300">Paradise</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our premium collection of authentic South Asian spices, rice, lentils, and specialty foods sourced from the finest suppliers.
            </p>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 bg-white dark:bg-gray-800 shadow-sm sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-green-700 dark:focus:ring-green-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                  <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-6 py-2 rounded-full font-medium transition-all ${
                          selectedCategory === category.id
                              ? 'bg-green-700 dark:bg-green-800 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-600'
                      }`}
                  >
                    {category.name} <span className="ml-2 text-sm opacity-75">({category.count})</span>
                  </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            {filteredProducts.length === 0 ? (
                <div className="text-center py-20 fade-in">
                  <Search className="mx-auto h-10 w-10 text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">No products found</h3>
                  <p className="mb-6 dark:text-gray-300">Try adjusting your search or filter criteria</p>
                  <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                      }}
                      className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full"
                  >
                    Clear Filters
                  </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProducts.map((product, index) => (
                      <div
                          key={product.id}
                          className="fade-in bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-3 overflow-hidden group"
                          style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative">
                          <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                              loading="lazy"
                          />

                          {product.badge && <BadgeLabel label={product.badge} />}

                          <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="w-9 h-9 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md hover:text-red-600 hover:shadow-lg transition">
                              <Heart className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => setSelectedProduct(product)}
                                className="w-9 h-9 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md hover:text-green-700 dark:hover:text-green-600 hover:shadow-lg transition"
                                aria-label={`View details of ${product.name}`}
                            >
                              <Eye className="h-5 w-5" />
                            </button>
                          </div>

                          {!product.inStock && (
                              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-3xl">
                                <span className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold select-none">Out of Stock</span>
                              </div>
                          )}
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            {/* {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${
                                        i < Math.floor(product.rating)
                                            ? 'text-yellow-400 fill-current'
                                            : 'text-gray-300'
                                    }`}
                                />
                            ))} */}
                            <span className="text-sm text-gray-600 dark:text-gray-300 select-none">
                              {/* {product.rating} ({product.reviews}) */}
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold mb-2 dark:text-white">{product.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 line-clamp-3">{product.description}</p>

                         {/* <div className="flex items-center justify-between mb-5">
                            <span className="text-2xl font-extrabold text-green-700 dark:text-green-600">€{product.price}</span>
                            {product.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">€{product.originalPrice}</span>
                            )}
                            </div> */}

                          <button
                              onClick={() => setSelectedProduct(product)}
                              className="w-full py-3 rounded-full font-semibold bg-green-700 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-900 text-white shadow-md transition"
                              aria-label={`View details of ${product.name}`}
                          >
                            <Eye className="inline h-5 w-5 mr-2" />
                            View
                          </button>
                        </div>
                      </div>
                  ))}
                </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-6">Stay Fresh with Our Newsletter</h2>
            <p className="text-xl mb-8">Get exclusive deals and seasonal updates delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none"
              />
              <button className="px-8 py-3 bg-white text-green-800 rounded-full hover:bg-gray-100 font-semibold flex items-center gap-2">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedProduct && (
            <div
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
                onClick={closeModal}
                role="dialog"
                aria-modal="true"
            >
              <div
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
              >
                <button
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-3xl font-bold leading-none"
                    onClick={closeModal}
                    aria-label="Close modal"
                >
                  &times;
                </button>
                <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-72 object-cover rounded-lg mb-6"
                />
                <h2 className="text-3xl font-extrabold mb-3 dark:text-white">{selectedProduct.name}</h2>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{selectedProduct.description}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-green-700 dark:text-green-600 font-extrabold text-2xl">€{selectedProduct.price}</span>
                  {selectedProduct.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">€{selectedProduct.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  {[...Array(5)].map((_, i) => (
                      <Star
                          key={i}
                          className={`h-6 w-6 ${
                              i < Math.floor(selectedProduct.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                          }`}
                      />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-300 select-none">
                    {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default Products;
