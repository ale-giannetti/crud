package it.unikey.flussicrud.flussi_crud_be.PL;

import it.unikey.flussicrud.flussi_crud_be.BLL.dto.UserDto;
import it.unikey.flussicrud.flussi_crud_be.BLL.exception.NotFoundException;
import it.unikey.flussicrud.flussi_crud_be.BLL.service.impl.UserServiceImpl;
import it.unikey.flussicrud.flussi_crud_be.PL.mapper.UserRestMapper;
import it.unikey.flussicrud.flussi_crud_be.PL.rest.UserRest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private final UserServiceImpl userService;
    private final UserRestMapper userRESTMapper;

    @PostMapping()
    private ResponseEntity<UserRest> save(@RequestBody UserRest userRest) {
        if(userRest.getId() != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        UserDto userDto = userService.insert(userRESTMapper.userRestToUserDto(userRest));
        return new ResponseEntity<>(userRESTMapper.userDtoToUserRest(userDto), HttpStatus.CREATED);
    }

    @GetMapping
    private ResponseEntity<List<UserRest>> getAllUser() {
        return new ResponseEntity<>(userService.getAll().stream().map(userRESTMapper::userDtoToUserRest).collect(Collectors.toList()), HttpStatus.OK);
    }
    @GetMapping(path = "/{id}")
    private ResponseEntity<UserRest> getGameById(@PathVariable("id") Integer id) {
        try{
            UserDto dto = userService.getById(id);
            return new ResponseEntity<>(userRESTMapper.userDtoToUserRest(dto), HttpStatus.OK);
        } catch(NotFoundException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping
    private ResponseEntity<UserRest> putGame(@RequestBody UserRest game) {
        try{
            UserDto dtoUpdated = userService.update(userRESTMapper.userRestToUserDto(game));
            return new ResponseEntity<>(userRESTMapper.userDtoToUserRest(dtoUpdated), HttpStatus.OK);
        } catch(NotFoundException e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(path = "/{id}")
    private ResponseEntity<Void> deleteGame(@PathVariable("id") Integer id) {
        try {
            userService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NotFoundException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
