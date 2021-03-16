import { NavBar } from "../components/NavBar/Index";
import { Products } from "../components/Products";
import { Strong } from "../styles/Styles";

export default function Home() {
  return (
    <>
      <NavBar />
      <Strong>PRODUTOS</Strong>
      <Products />
    </>
  )
}
