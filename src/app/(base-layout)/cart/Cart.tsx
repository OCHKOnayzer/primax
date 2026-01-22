import React from "react";
import { Button } from "@/shared";
import { CommonSize } from "@/types";
import { ButtonType } from "@/shared/ui/Button";
import { ButtonVariant } from "@/shared/ui/Button";

const Cart = () => {
  return (
    <div className="flex justify-center items-center">
      <Button
        size={CommonSize.sm}
        variant={ButtonVariant.bordered}
        type={ButtonType.button}
        className="border-[#243c5a]"
      >
        hello
      </Button>
      <Button
        size={CommonSize.sm}
        variant={ButtonVariant.bordered}
        type={ButtonType.button}
      >
        world
      </Button>
    </div>
  );
};

export default Cart;
