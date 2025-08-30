import Image from "next/image";
import { Account } from "./components/Account";
import {Datatable} from "./components/Datatable";



export default function Home() {
  return (
  <main>

    <Account/>
    <div>
    <Datatable/>
    </div>
  </main>
  );
}
