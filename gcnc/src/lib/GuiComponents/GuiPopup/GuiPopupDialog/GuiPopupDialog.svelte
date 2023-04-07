<script lang="ts">
  import { scale } from "svelte/transition";
  
  import GuiPopupTopBar from "./GuiPopupTopBar/GuiPopupTopBar.svelte";

  export let GisPopupOpen: boolean;
</script>

<dialog
  transition:scale
  open
  class="shadow-2xl rounded-md border overflow-auto shadow-white p-0 max-w-[80%] max-h-[80%]"
>
  <GuiPopupTopBar bind:GisPopupOpen />
  <section class="leading-relaxed text-ellipsis p-4">
    <slot>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minima?
      Dolores deserunt sunt repudiandae fugiat aperiam ab optio qui. Praesentium
      incidunt sunt ratione odit animi? Sint praesentium temporibus nulla totam!
      Id voluptate reprehenderit assumenda delectus asperiores sequi magnam,
      adipisci libero, pariatur in neque fugiat nostrum veniam ipsam nihil sed
      dolorem? Temporibus at magnam quis vitae dolorem cumque expedita aut quas.
      Obcaecati, pariatur! Iusto molestias sed porro quibusdam voluptate eum
      sint non corporis nihil quaerat architecto voluptas voluptatibus doloribus
      quod, ratione fugiat quia harum aut, modi labore quam accusamus quasi.
      Quo. Fugit deleniti perferendis rerum repellat porro eos non consequuntur.
      Aspernatur excepturi est iste nemo adipisci ut consequuntur ducimus,
      suscipit exercitationem facilis provident asperiores ullam, accusantium
      error totam pariatur non? Dignissimos! Corrupti eligendi, cupiditate,
      fugit nobis iusto repellat ad enim debitis eius quis dolore omnis, error
      veniam accusamus? Reiciendis, accusamus, distinctio fuga recusandae
      dolorem tempora architecto voluptatem labore aliquid iste atque.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quasi sunt atque, optio cumque unde quibusdam voluptatibus quas cum commodi doloremque ratione adipisci quis nisi deserunt enim, possimus consequuntur fuga.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minima?
      Dolores deserunt sunt repudiandae fugiat aperiam ab optio qui. Praesentium
      incidunt sunt ratione odit animi? Sint praesentium temporibus nulla totam!
      Id voluptate reprehenderit assumenda delectus asperiores sequi magnam,
      adipisci libero, pariatur in neque fugiat nostrum veniam ipsam nihil sed
      dolorem? Temporibus at magnam quis vitae dolorem cumque expedita aut quas.
      Obcaecati, pariatur! Iusto molestias sed porro quibusdam voluptate eum
      sint non corporis nihil quaerat architecto voluptas voluptatibus doloribus
      quod, ratione fugiat quia harum aut, modi labore quam accusamus quasi.
      Quo. Fugit deleniti perferendis rerum repellat porro eos non consequuntur.
      Aspernatur excepturi est iste nemo adipisci ut consequuntur ducimus,
      suscipit exercitationem facilis provident asperiores ullam, accusantium
      error totam pariatur non? Dignissimos! Corrupti eligendi, cupiditate,
      fugit nobis iusto repellat ad enim debitis eius quis dolore omnis, error
      veniam accusamus? Reiciendis, accusamus, distinctio fuga recusandae
      dolorem tempora architecto voluptatem labore aliquid iste atque.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quasi sunt atque, optio cumque unde quibusdam voluptatibus quas cum commodi doloremque ratione adipisci quis nisi deserunt enim, possimus consequuntur fuga.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minima?
      Dolores deserunt sunt repudiandae fugiat aperiam ab optio qui. Praesentium
      incidunt sunt ratione odit animi? Sint praesentium temporibus nulla totam!
      Id voluptate reprehenderit assumenda delectus asperiores sequi magnam,
      adipisci libero, pariatur in neque fugiat nostrum veniam ipsam nihil sed
      dolorem? Temporibus at magnam quis vitae dolorem cumque expedita aut quas.
      Obcaecati, pariatur! Iusto molestias sed porro quibusdam voluptate eum
      sint non corporis nihil quaerat architecto voluptas voluptatibus doloribus
      quod, ratione fugiat quia harum aut, modi labore quam accusamus quasi.
      Quo. Fugit deleniti perferendis rerum repellat porro eos non consequuntur.
      Aspernatur excepturi est iste nemo adipisci ut consequuntur ducimus,
      suscipit exercitationem facilis provident asperiores ullam, accusantium
      error totam pariatur non? Dignissimos! Corrupti eligendi, cupiditate,
      fugit nobis iusto repellat ad enim debitis eius quis dolore omnis, error
      veniam accusamus? Reiciendis, accusamus, distinctio fuga recusandae
      dolorem tempora architecto voluptatem labore aliquid iste atque.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quasi sunt atque, optio cumque unde quibusdam voluptatibus quas cum commodi doloremque ratione adipisci quis nisi deserunt enim, possimus consequuntur fuga.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minima?
      Dolores deserunt sunt repudiandae fugiat aperiam ab optio qui. Praesentium
      incidunt sunt ratione odit animi? Sint praesentium temporibus nulla totam!
      Id voluptate reprehenderit assumenda delectus asperiores sequi magnam,
      adipisci libero, pariatur in neque fugiat nostrum veniam ipsam nihil sed
      dolorem? Temporibus at magnam quis vitae dolorem cumque expedita aut quas.
      Obcaecati, pariatur! Iusto molestias sed porro quibusdam voluptate eum
      sint non corporis nihil quaerat architecto voluptas voluptatibus doloribus
      quod, ratione fugiat quia harum aut, modi labore quam accusamus quasi.
      Quo. Fugit deleniti perferendis rerum repellat porro eos non consequuntur.
      Aspernatur excepturi est iste nemo adipisci ut consequuntur ducimus,
      suscipit exercitationem facilis provident asperiores ullam, accusantium
      error totam pariatur non? Dignissimos! Corrupti eligendi, cupiditate,
      fugit nobis iusto repellat ad enim debitis eius quis dolore omnis, error
      veniam accusamus? Reiciendis, accusamus, distinctio fuga recusandae
      dolorem tempora architecto voluptatem labore aliquid iste atque.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quasi sunt atque, optio cumque unde quibusdam voluptatibus quas cum commodi doloremque ratione adipisci quis nisi deserunt enim, possimus consequuntur fuga.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minima?
      Dolores deserunt sunt repudiandae fugiat aperiam ab optio qui. Praesentium
      incidunt sunt ratione odit animi? Sint praesentium temporibus nulla totam!
      Id voluptate reprehenderit assumenda delectus asperiores sequi magnam,
      adipisci libero, pariatur in neque fugiat nostrum veniam ipsam nihil sed
      dolorem? Temporibus at magnam quis vitae dolorem cumque expedita aut quas.
      Obcaecati, pariatur! Iusto molestias sed porro quibusdam voluptate eum
      sint non corporis nihil quaerat architecto voluptas voluptatibus doloribus
      quod, ratione fugiat quia harum aut, modi labore quam accusamus quasi.
      Quo. Fugit deleniti perferendis rerum repellat porro eos non consequuntur.
      Aspernatur excepturi est iste nemo adipisci ut consequuntur ducimus,
      suscipit exercitationem facilis provident asperiores ullam, accusantium
      error totam pariatur non? Dignissimos! Corrupti eligendi, cupiditate,
      fugit nobis iusto repellat ad enim debitis eius quis dolore omnis, error
      veniam accusamus? Reiciendis, accusamus, distinctio fuga recusandae
      dolorem tempora architecto voluptatem labore aliquid iste atque.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quasi sunt atque, optio cumque unde quibusdam voluptatibus quas cum commodi doloremque ratione adipisci quis nisi deserunt enim, possimus consequuntur fuga.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minima?
      Dolores deserunt sunt repudiandae fugiat aperiam ab optio qui. Praesentium
      incidunt sunt ratione odit animi? Sint praesentium temporibus nulla totam!
      Id voluptate reprehenderit assumenda delectus asperiores sequi magnam,
      adipisci libero, pariatur in neque fugiat nostrum veniam ipsam nihil sed
      dolorem? Temporibus at magnam quis vitae dolorem cumque expedita aut quas.
      Obcaecati, pariatur! Iusto molestias sed porro quibusdam voluptate eum
      sint non corporis nihil quaerat architecto voluptas voluptatibus doloribus
      quod, ratione fugiat quia harum aut, modi labore quam accusamus quasi.
      Quo. Fugit deleniti perferendis rerum repellat porro eos non consequuntur.
      Aspernatur excepturi est iste nemo adipisci ut consequuntur ducimus,
      suscipit exercitationem facilis provident asperiores ullam, accusantium
      error totam pariatur non? Dignissimos! Corrupti eligendi, cupiditate,
      fugit nobis iusto repellat ad enim debitis eius quis dolore omnis, error
      veniam accusamus? Reiciendis, accusamus, distinctio fuga recusandae
      dolorem tempora architecto voluptatem labore aliquid iste atque.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quasi sunt atque, optio cumque unde quibusdam voluptatibus quas cum commodi doloremque ratione adipisci quis nisi deserunt enim, possimus consequuntur fuga.
      </slot
    >
  </section>
</dialog>
