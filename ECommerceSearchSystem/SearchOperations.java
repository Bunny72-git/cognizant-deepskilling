import java.util.Arrays;
import java.util.Comparator;

public class SearchOperations {

    // Linear Search
    public static Product linearSearch(Product[] products, int productId) {

        for (Product product : products) {
            if (product.productId == productId) {
                return product;
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int productId) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            if (products[mid].productId == productId) {
                return products[mid];
            }

            if (products[mid].productId < productId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    // Sort Products
    public static void sortProducts(Product[] products) {
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
    }
}