package rental;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class RentalPriceCalculatorTest {
	
	private RentalPriceCalculator calculator;
	
	
	@Before
	public void beforeEachTest() {
		calculator = new RentalPriceCalculator();
	}
	

	@Test
	public void priceHigherWhenMoreAccidentsCaused() {
		assertEquals(115, calculator.adaptPriceByCausedAccidents(29, true, 100), 0.0001); //viimane number näitab viga mida luban

	}
	
	@Test
	public void priceLowerWhenNoAccidentsCaused() {
		assertEquals(100, calculator.adaptPriceByCausedAccidents(29, false, 100), 0.0001); //viimane number näitab viga mida luban

	}
	
	
}
