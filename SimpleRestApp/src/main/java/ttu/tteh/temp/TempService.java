package ttu.tteh.temp;

import lombok.Getter;
import lombok.Setter;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;


@Service
public class TempService {
	
	private TempRepository tempRepository;

	public TempService(TempRepository tempRepository) {
		this.tempRepository = tempRepository;
	}

	Temp addTemp(Temp temp) {
		// here you can do some validations etc before saving the user
		return tempRepository.save(temp);
	}
	
	
	
	Temp addToCart(Temp temp) {
		return tempRepository.save(temp);
	}
	
	Temp getTempById(long tempId) {
		return tempRepository.findOne(tempId);
	}
	
	
	List<Temp> getAllTemp() {
		return tempRepository.findAll();
	}

	
}
