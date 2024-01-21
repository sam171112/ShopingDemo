const mainDiv=document.getElementById('results') 
  fetchData('https://dummyjson.com/products')
  async function fetchData(url)
 {
   try
   {
    const res= await fetch(url)
    const data= await res.json()
     displayData(data.products)
   }
   catch(err)
    {
        console.log("My Error"+err)
    }
 }

function displayData(products)
{
    products.forEach((pro)=>
    {
       
       const subDiv=document.createElement('div')
        subDiv.classList.add('subDiv')

        const img=document.createElement('img')
        img.classList.add('img')
        img.src=pro.images[0]
        img.alt=pro.title
        
        const title=document.createElement('h1')
        title.classList.add('title')
        title.textContent=pro.title

        const category=document.createElement('h3')
        category.classList.add('category')
        category.textContent=pro.category
        

        const price=document.createElement('h2')
        price.classList.add('price')
        price.textContent=pro.price 
       
        
         const btn=document.createElement('button')
         btn.textContent="Add To Cart"
         btn.classList.add('btn')
         subDiv.append(img,title,category,price,btn)
         mainDiv.appendChild(subDiv)

         btn.addEventListener('click',incr) 
         btn.addEventListener('click', e=> 
         {            
            updateData(price.textContent)
         })     
         
           
    })
}


let count=document.getElementById('p2')
let pri=document.getElementById('p4')
let count1=0;
let price1=0;
const incr=()=>
{
  count1++
  count.textContent=count1
  console.log()   
}
const updateData=(p)=>
{
  price1=price1+Number(p)
  pri.textContent=price1
}