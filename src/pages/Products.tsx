
import { useState, useEffect } from 'react';
import {
  Search,
  Star,
  Heart,
  Eye,
  ArrowRight,
} from 'lucide-react';
import products from '../Data/products.js';
import { useTranslation } from 'react-i18next';




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
  const { i18n, t } = useTranslation();
  const [product,setProduct]=useState(products);

  const allCategories = [
    { id: 'spice-mixes', name: 'Spice Mixes' },
    { id: 'rice-grains', name: 'Rice & Grains' },
    { id: 'lentils-beans', name: 'Lentils & Beans' },
    { id: 'ready-meals', name: 'Ready Meals' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'condiments', name: 'Condiments' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'flour-semolina', name: 'Flour & Semolina' },
    { id: 'soy-products', name: 'Soy Products' },
    { id: 'rice', name: 'Rice' },
    { id: 'flour', name: 'Flour' },
    { id: 'semolina', name: 'Semolina' },
    { id: 'chips', name: 'Chips' },
    { id: 'millets', name: 'Millets' },
    { id: 'sweeteners', name: 'Sweeteners' },
    { id: 'noodles', name: 'Noodles' },
    { id: 'lentils', name: 'Lentils' },
    { id: 'spices', name: 'Spices' },
    { id: 'juice', name: 'Juice' },
    { id: 'pickel-paste', name: 'Pickel & Paste' },
    { id: 'beans', name: 'Beans' },
    { id: 'spice', name: 'Spice' },
    { id: 'aashirvaad', name: 'Aashirvaad' },
    { id: 'annam', name: 'Annam' },
    { id: 'haldiram', name: 'Haldiram' },
    { id: 'mdh', name: 'MDH' },
    { id: 'patak-pickles', name: 'Patak Pickles' },
    { id: 'periyar-delights', name: 'Periyar Delights' },
    { id: 'shaan', name: 'Shaan' },
    { id: 'trs', name: 'TRS' }
  ];
  
  const categories = [
    {
      id: 'all',
      name: 'All Products',
      count: product.length,
    },
    ...allCategories.map(cat => ({
      ...cat,
      count: product.filter(p => p.category === cat.id).length,
    }))
  ];

  const closeModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    let filtered = product;

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
              {t('product.title.tropical')} <span className="block text-yellow-300">{t('product.title.paradise')}</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('product.subtitle')}
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
            {/* <div className="flex flex-wrap gap-2">
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
            </div> */}
             <div className="flex gap-2 w-full max-w-full flex-nowrap overflow-x-auto no-scrollbar sm:flex-wrap sm:overflow-visible snap-x">
  {categories.map(category => (
    <button
      key={category.id}
      onClick={() => setSelectedCategory(category.id)}
      className={`px-6 py-2 rounded-full font-medium transition-all shrink-0 snap-start ${
        selectedCategory === category.id
          ? 'bg-green-700 dark:bg-green-800 text-white'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-600'
      }`}
    >
      {category.name}{' '}
      <span className="ml-2 text-sm opacity-75">({category.count})</span>
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
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('product.noproduct')}</h3>
                  <p className="mb-6 dark:text-gray-300">{t('product.nofilter')}</p>
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
                // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                              className="w-full h-52 group-hover:scale-110 transition-transform duration-300 ease-in-out"
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
                                <span className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold select-none">{t('product.outofstock')}</span>
                              </div>
                          )}
                        </div>

                        {/* <div className="p-6">
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
                            {/* <span className="text-sm text-gray-600 dark:text-gray-300 select-none"> */}
                              {/* {product.rating} ({product.reviews}) */}
                            {/* </span> */}
                          {/* // </div> */}

                          {/* // <h3 className="text-lg font-semibold mb-2 dark:text-white">{product.name}</h3>
                          // <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 line-clamp-3">{product.description}</p> */}

                         {/* <div className="flex items-center justify-between mb-5">
                            <span className="text-2xl font-extrabold text-green-700 dark:text-green-600">€{product.price}</span>
                            {product.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">€{product.originalPrice}</span>
                            )}
                            </div> */}

                        {/* //   <button */}
                        {/* //       onClick={() => setSelectedProduct(product)}
                        //       className="w-full py-3 rounded-full font-semibold bg-green-700 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-900 text-white shadow-md transition"
                        //       aria-label={`View details of ${product.name}`}
                        //   >
                        //     <Eye className="inline h-5 w-5 mr-2" />
                        //     {t('product.view')}
                        //   </button> */}
                        {/* // </div>  */}

                      {/* <div className="p-6 flex flex-col gap-[5px] min-h-238 justify-between"> */}
                      <div className="p-6 flex flex-col gap-[5px] lg:min-h-[238px] justify-between max-h-[50%] ">
                      <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 dark:text-white line-clamp-2">
                        {product.name}
                      </h4>

                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-5 line-clamp-2 sm:line-clamp-3">
                        {product.description}
                      </p>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm lg:text-base bg-green-700 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-900 text-white shadow-md transition"
                        aria-label={`View details of ${product.name}`}
                      >
                        <Eye className="inline h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        {t('product.view')}
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
            <h2 className="text-4xl font-bold mb-6">{t('product.newsletter')}</h2>
            <p className="text-xl mb-8">{t('product.deals')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none"
              />
              <button className="px-8 py-3 bg-white text-green-800 rounded-full hover:bg-gray-100 font-semibold flex items-center gap-2">
                {t('product.subscribe')} <ArrowRight className="h-4 w-4" />
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
                    className="w-full h-72 object-contain rounded-lg mb-6"
                />
                <h2 className="text-3xl font-extrabold mb-3 dark:text-white text-center">{selectedProduct.name}</h2>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center">{selectedProduct.description}</p>
                <div className="flex items-center gap-4 mb-6">
                  {/* <span className="text-green-700 dark:text-green-600 font-extrabold text-2xl">€{selectedProduct.price}</span> */}
                  {/* {selectedProduct.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">€{selectedProduct.originalPrice}</span>
                  )} */}
                </div>
                {/* <div className="flex items-center gap-3 mb-4">
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
                </div> */}
              </div>
            </div>
        )}
      </div>
  );
};

export default Products;