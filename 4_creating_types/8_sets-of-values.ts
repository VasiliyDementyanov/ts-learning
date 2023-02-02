// TStatus contains "pending" "completed" "shipped"
// TStatus2 contains only "completed"
type TOrderStatus = 'pending' | 'completed';
type TDeliveryStatus = 'completed' | 'shipped';
type TStatus = TOrderStatus | TDeliveryStatus;
type TStatus2 = TOrderStatus & TDeliveryStatus;

// Type narrowing
function logStatus(status: string | null) {
  if (status) {
    // string only remains
    console.log(status);
  }
}
