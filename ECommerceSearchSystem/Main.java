public class Main {

    public static void main(String[] args) {

        Product[] products = {
                new Product(104, "Laptop", "Electronics"),
                new Product(101, "Shoes", "Fashion"),
                new Product(105, "Mobile", "Electronics"),
                new Product(102, "Watch", "Accessories"),
                new Product(103, "Headphones", "Electronics")
        };

        System.out.println("===== Linear Search =====");

        Product result = SearchOperations.linearSearch(products, 102);

        if (result != null) {
            result.display();
        } else {
            System.out.println("Product Not Found");
        }

        SearchOperations.sortProducts(products);

        System.out.println("===== Binary Search =====");

        result = SearchOperations.binarySearch(products, 102);

        if (result != null) {
            result.display();
        } else {
            System.out.println("Product Not Found");
        }
    }
}
