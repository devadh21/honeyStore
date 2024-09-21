import { revalidatePath } from "next/cache";
import Hero from "@compo/home/Hero";
import Products from "@compo/home/Products"; 
import About from "@/components/home/About";
import WhyUs from "@/components/home/WhyUs";
import Services from "@/components/home/Services";
import Newslatter from "@/components/home/Newslatter";


async function getProducts() {  
  const res = await fetch(process.env.URL_SITE+"/api/products/honeys",{ 
    // cache: 'no-store'
    headers:{
      'authorization': '1234567890abcdefghijklmnopqrstuvwxyz',
    }
  });  
  if (!res.ok) throw new Error(await res.text()); 
  revalidatePath("/");
  return res.json(); 
}

export default async  function Home() {
  // Fetching products data from the server.
  const data = await getProducts(); 

  return (
    <main className="full-screen">     
      <Hero />
      <Products products={data.data} />
      <About />
      <WhyUs/>      
      <Services/>      
      <Newslatter/>      
    </main>
  );
}
