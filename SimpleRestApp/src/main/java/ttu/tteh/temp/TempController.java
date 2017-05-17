package ttu.tteh.temp;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ttu.tteh.user.User;

@RestController
public class TempController {
	
	private TempService tempService;

	public TempController(TempService tempService) {
		this.tempService = tempService;
	}
	
	
	
	
	@RequestMapping(value="/temp/add", method=RequestMethod.PUT,
			consumes = "application/json")
	public Temp addTemp(@RequestBody Temp temp) {
		return tempService.addTemp(temp);
	}
	
	@RequestMapping(value="/temp", method=RequestMethod.GET)
	public List<Temp> getAllTemp() {
		return tempService.getAllTemp();
	}
	

	
	@RequestMapping(value = "/temp/{id}", method=RequestMethod.GET)
	public Temp getTemp(@PathVariable("id") long tempId) {
		return tempService.getTempById(tempId);
	}
}
