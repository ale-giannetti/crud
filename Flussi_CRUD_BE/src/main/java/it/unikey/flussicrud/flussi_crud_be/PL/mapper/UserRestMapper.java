package it.unikey.flussicrud.flussi_crud_be.PL.mapper;

import it.unikey.flussicrud.flussi_crud_be.BLL.dto.UserDto;
import it.unikey.flussicrud.flussi_crud_be.PL.rest.UserRest;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserRestMapper {

    UserDto userRestToUserDto(UserRest userRest);
    UserRest userDtoToUserRest(UserDto userDto);
}
