import { useContext } from "react"


import Layout from "../components/Layout";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Adds from "../components/Adds";
import News from "../components/News";
import Carousel from "../components/Carousel";

//import {Banners as BannerImg} from "../assets/images";
import MainCtx from "../context/main";
import bannersData from "..//assets/data/banners.json";

import addsData from "../assets/data/adds.json";
import goodsData from "../assets/data/goods.json";




export function Home() {

  const { news, newsLenta } = useContext(MainCtx);

  return <>

    <Banner {...bannersData[2]} pattern={false} bgPos="50% 50%" />
    <Layout>
      <Adds {...addsData[0]} />
    </Layout>
{goodsData.length > 0 && <Layout mb={2} dt={4} title="Новинки">
  {goodsData.map(el => <Card key={el._id}{...el}/>)}
</Layout>

}
    {news.length > 0 && <Layout mb={2} dt={4} title="Новости о собачках">
      <Carousel
        data={news.map((el, i) => <News key={`new-${i}`} data={el} isTitled={true} />)}
        cnt={window.innerWidth < 1064 ? 2 : 4}
      />

    </Layout>}
   
    <Layout dt={2}>
      <Adds {...addsData[1]} />
      <Adds {...addsData[2]} />
    </Layout>
    {goodsData.length > 0 && <Layout mb={2} dt={4} title="Популярные товары">
  {goodsData.map(el => <Card key={el._id}{...el}/>)}
   </Layout>}
    {newsLenta.length > 0 && <Layout mb={1} dt={4} title="Новости Lenta.ru">

      <Carousel
        data={newsLenta.map((el, i) => <News key={`new-${i}`} data={el} />)}
        cnt={window.innerWidth < 1064 ? 1 : 2} />
    </Layout>}
    <Layout dt={2}>
      <Adds {...addsData[3]} />
      <Adds {...addsData[4]} />
    </Layout>
    {goodsData.length > 0 && <Layout mb={2} dt={4} title="Недавно просмотренные товары">
  {goodsData.map(el => <Card key={el._id}{...el}/>)}
</Layout>}
  
  <Layout>
      <Adds {...addsData[5]} />
    </Layout>
  
  
  
  
  </>

}

