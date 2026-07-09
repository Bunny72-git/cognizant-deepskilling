public class AdapterPatternTest {

    public static void main(String[] args) {

        PaymentProcessor paypal = new PayPalAdapter(new PayPalGateway());

        PaymentProcessor stripe = new StripeAdapter(new StripeGateway());

        System.out.println("Using PayPal Gateway");
        paypal.processPayment(5000);

        System.out.println();

        System.out.println("Using Stripe Gateway");
        stripe.processPayment(7500);
    }
}