package com.nalgae.goldwings.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nalgae.goldwings.entity.Menu;
import com.nalgae.goldwings.service.MenuService;

import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/menu")
@RequiredArgsConstructor
public class MenuController {
    private final MenuService menuService;

    @GetMapping("/tab")
    public List<Menu> getTopMenus() {
        return menuService.getTopMenus();
    }

    @GetMapping("/sub/{parentMenuId}")
    public List<Menu> getSubMenus(@PathVariable("parentMenuId") String parentMenuId) {
        return menuService.getSubMenus(parentMenuId);
    }

    @GetMapping("/{menuId}")
    public Map<String, String> getXtypeByMenuId(@PathVariable("menuId") String menuId) {
        Menu menu = menuService.getMenuByMenuId(menuId);
        Map<String, String> result = new HashMap<>();
        result.put("menu_seq", menu.getMenuId());
        result.put("menu_name", menu.getMenuNm());
        return result;
    }

    // 테이블에서 메뉴 ID로 조회하여 해당 메뉴 ID의 전체 데이터를 가져올때
    // @GetMapping("/{menuId}")
    // public Menu getMenuByMenuId(@PathVariable("menuId") String menuId) {
    // return menuService.getMenuByMenuId(menuId);
    // }

    @GetMapping("/all")
    public List<Menu> getAllMenus() {
        return menuService.getAllMenus();
    }
}
