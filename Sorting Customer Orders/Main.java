public class Main {

    public static void printOrders(Order[] orders) {

        for (Order order : orders) {
            System.out.println(order);
        }

        System.out.println();
    }

    public static void main(String[] args) {

        Order[] orders = {

                new Order(101, "Vinay", 2500),
                new Order(102, "Rahul", 1800),
                new Order(103, "Priya", 4200),
                new Order(104, "Sneha", 3000)

        };

        System.out.println("Original Orders:");
        printOrders(orders);

        BubbleSort.bubbleSort(orders);

        System.out.println("After Bubble Sort:");
        printOrders(orders);

        Order[] orders2 = {

                new Order(101, "Vinay", 2500),
                new Order(102, "Rahul", 1800),
                new Order(103, "Priya", 4200),
                new Order(104, "Sneha", 3000)

        };

        QuickSort.quickSort(orders2, 0, orders2.length - 1);

        System.out.println("After Quick Sort:");
        printOrders(orders2);
    }
}