
import FencesClient from './FencesClient';
import {dataDiner} from "@/app/serviceMemory/fences/data";

interface dinerType {
  img: string;
  name: string;
}


export default function FencesPage() {
  return <FencesClient dataDiner={dataDiner} />;
}

