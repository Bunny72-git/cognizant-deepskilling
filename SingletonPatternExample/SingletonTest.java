public class SingletonTest {

    public static void main(String[] args) {

        // Get Logger instance
        Logger logger1 = Logger.getInstance();
        logger1.log("Application started.");

        // Get Logger instance again
        Logger logger2 = Logger.getInstance();
        logger2.log("Processing data...");

        // Compare references
        if (logger1 == logger2) {
            System.out.println("\nBoth logger1 and logger2 refer to the same instance.");
        } else {
            System.out.println("\nDifferent instances created.");
        }

        // Print hash codes
        System.out.println("Logger1 HashCode: " + logger1.hashCode());
        System.out.println("Logger2 HashCode: " + logger2.hashCode());
    }
}