"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null); // Создаем ref для элемента overlay
  const wrapper = useRef(null); // Создаем ref для элемента wrapper
  const router = useRouter(); // Получаем router из Next.js для навигации

  // Функция onDismiss вызывается при закрытии модалки
  const onDismiss = useCallback(() => {
    router.back(); // Возвращаемся на предыдущую страницу при закрытии модалки
  }, [router]);

  // Функция onClick вызывается при клике на overlay или wrapper
  const onClick: MouseEventHandler = useCallback(
    (e) => {
      // Проверяем, кликнули ли мы по overlay или wrapper
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss(); // Вызываем onDismiss, если он определен
      }
    },
    [onDismiss, overlay, wrapper]
  );

  // Функция onKeyDown вызывается при нажатии клавиши на клавиатуре
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss(); // Закрываем модалку при нажатии Escape
    },
    [onDismiss]
  );

  // Добавляем слушатель события нажатия клавиши при монтировании компонента
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown); // Удаляем слушатель при размонтировании компонента
  }, [onKeyDown]);

  // Возвращаем JSX для отображения модалки
  return (
    <div
      ref={overlay} // Привязываем ref к overlay
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10" // CSS классы для стилизации overlay
      onClick={onClick} // Вызываем onClick при клике на overlay
    >
      <div
        ref={wrapper} // Привязываем ref к wrapper
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6" // CSS классы для стилизации wrapper
      >
        {/* Отображаем содержимое модалки, переданное через props */}

        {children}
      </div>
    </div>
  );
}
