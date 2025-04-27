import { useState } from 'react';

const categories = ['Electronics', 'Clothing', 'Food'];

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const [errors, setErrors] = useState<{ name?: string; price?: string; category?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; price?: string; category?: string } = {};
    if (!name.trim()) newErrors.name = 'Product name is required.';
    if (!price || isNaN(Number(price)) || Number(price) <= 0) newErrors.price = 'Price must be a positive number.';
    if (!category) newErrors.category = 'Please select a category.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newProduct = {
      name,
      price: Number(price),
      category,
    };
    console.log('Product Submitted:', newProduct);

    // Reset form
    setName('');
    setPrice('');
    setCategory('');
    setErrors({});
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            className="w-full border p-2 rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            className="w-full border p-2 rounded"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            className="w-full border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;