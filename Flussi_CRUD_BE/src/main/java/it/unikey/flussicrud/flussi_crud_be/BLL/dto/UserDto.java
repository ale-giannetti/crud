package it.unikey.flussicrud.flussi_crud_be.BLL.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class UserDto {

    private Integer id;
    private String name;
    private String surname;
}
