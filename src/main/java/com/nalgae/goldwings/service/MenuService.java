package com.nalgae.goldwings.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.nalgae.goldwings.entity.Menu;
import com.nalgae.goldwings.repository.MenuRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MenuService {
    private final MenuRepository menuRepository;

    public List<Menu> getAllMenus() {
        return menuRepository.findAllByUseYn("1");
    }

    public List<Menu> getTopMenus() {
        return menuRepository.findByMenuLevel(1).stream()
                .filter(menu -> "1".equals(menu.getUseYn()))
                .collect(Collectors.toList());
    }

    public List<Menu> getSubMenus(String parentMenuId) {
        return menuRepository.findByParentMenuId(parentMenuId).stream()
                .filter(menu -> "1".equals(menu.getUseYn()))
                .collect(Collectors.toList());
    }

    public Menu getMenuByMenuId(String menuId) {
        return menuRepository.findByMenuId(menuId);
    }
}
