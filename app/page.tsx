import Header from "@/components/Header/page";
import "./globals.css";
import Products from "@/components/Products/page";
import Provider from "@/context/provider";
import Cart from "@/components/Cart/page";

export default function Home() {
  return (
    <main>
      <Provider>
        <Header />
        <Products />
        <Cart />
      </Provider>
    </main>
  );
}
