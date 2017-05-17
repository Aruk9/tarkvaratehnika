package ttu.tteh.temp;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TempRepository extends CrudRepository<Temp, Long>{
	@Override
	public List<Temp> findAll();
}
