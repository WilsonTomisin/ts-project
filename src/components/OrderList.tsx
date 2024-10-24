import { useLoaderData } from 'react-router-dom';
import { type OrdersResponse } from '@/utils';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const OrderList = () => {
    const { data:orders,  meta} = useLoaderData() as OrdersResponse ;
  return (
    <div>
      yoooo
    </div>
  )
}

export default OrderList
