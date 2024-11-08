import { ArrowDownUp } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns/indes";

const TransactionsPage = async () => {
  // acessar as transações do meu banco de dados
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/* {TITULO E BOTAO} */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xls font-bold">Transações</h1>
        <Button className="rounded-full font-bold">
          Adcionar transações
          <ArrowDownUp />
        </Button>
      </div>
      <DataTable columns={TransactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
