package it.unikey.flussicrud.flussi_crud_be.BLL.mapper;

import it.unikey.flussicrud.flussi_crud_be.BLL.dto.UserDto;
import it.unikey.flussicrud.flussi_crud_be.DAL.entity.UserEntity;
import org.mapstruct.Mapper;

@Mapper (componentModel = "spring")
public interface UserMapper {

    UserDto userEntityToUserDto(UserEntity userEntity);
    UserEntity userDtoToUserEntity(UserDto userDto);
}
