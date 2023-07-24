import storeItems from "../../data/items.json"
import StoreItem from "../components/StoreItem"

const Home = () => {
  return (<>
    <main className="mainPageWrap p-4 sm:p-12 bg-Light-grayish-blue grid gap-3 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4" >
      {storeItems.map(item => (
        <section key={item.id}>
          <StoreItem {...item}/>
        </section>
        ))}
    </main>
  </>)
}

export default Home