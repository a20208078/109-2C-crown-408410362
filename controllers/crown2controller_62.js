const Category_62 = require('../models/categoryModel_62');

export.getHomepage = async (req , res) => {
  let data;
  const [rows] = await Category_62.fetchAll();
  data = rows;
  // res.json(data);
  res.render('crown2_62', { 
  title: '陳巧諭 408410362(async/await)',
  data
 });
}

export.getProductsByCategory = async (req,res) => {
    console.log('req.params' , req.params.product);

}

