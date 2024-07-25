import Card1 from "../../Card/card";
import Header from "../../Header/header";
import RevenueChart from '@/app/Dashboard/revenue-chart';
import Card from '@/app/Dashboard/cards';
import LatestInvoices from '@/app/Dashboard/latest-invoices';
import { fetchCardData } from "../../lib/data";
import { lusitana } from "../../ui/fonts";
import { Suspense } from "react";
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from "@/app/ui/skeletons";
import CardWrapper from "@/app/Dashboard/cards";

export default async function Page() {
   // const latestInvoices = await fetchLatestInvoices();
    const {numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices} = await fetchCardData();
    
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton/>}>
            <RevenueChart/>
          </Suspense>

          <Suspense fallback={<LatestInvoicesSkeleton/>}>
            <LatestInvoices/>
          </Suspense>
        </div>
      </main>
    );
  }