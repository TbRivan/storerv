import SideBar from "@/components/organism/SideBar";
import TransactionsDetailContent from "@/components/organism/TransactionDetailContent";

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionsDetailContent />
    </section>
  );
}
