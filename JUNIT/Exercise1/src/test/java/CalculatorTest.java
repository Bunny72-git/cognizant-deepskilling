import static org.junit.Assert.assertEquals;

import org.example.Calculator;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testAddition() {
        Calculator calculator = new Calculator();
        assertEquals(10, calculator.add(4, 6));
    }
}