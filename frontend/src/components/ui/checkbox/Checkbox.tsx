import React, { useState, useEffect } from 'react';


interface DisplayComponentProps {
  selected: boolean;
  onClick: () => void;
  [key: string]: any;  // ...props
}

interface Props {
  parentValue?: boolean;
  parentClicked?: boolean;
  onSelect?: () => void;
  selectInitialValue?: boolean;
  selectParent?: () => void;
  display: React.FC<DisplayComponentProps>;
  className?: string;
  children: React.ReactNode;
  additionalData?: string[];
  [key: string]: any;  // ...props
}

/**
 * Nested checkbox component with following behavior:
 *  - On checkbox select, recursively select ALL child nodes
 *  - On checkbox select, select all direct parent nodes.
 *  
 *  "click" is when the user physically clicks the checkbox.
 *  "select" is when the checkbox selected state is toggled, which can 
 *    happen from either a direct click or a click by parent/child.
 */
const Checkbox: React.FC<Props> = ({
  parentValue=false,
  parentClicked=false,
  onSelect=()=>{},
  selectInitialValue=parentValue,
  selectParent=()=>{},
  display,
  className="",
  additionalData=[],
  children,
  ...props
}) => {
  const [selected, setSelected] = useState<boolean>(parentValue);
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
      if (parentValue && !selected) {
          handleClick();
      } else if (!parentValue && selected) {
          handleClick();
      }
  }, [parentClicked]);

  // Value initializer
  useEffect(() => {
      setSelected(selectInitialValue);
  }, [additionalData]);  // Without this additionalData prop the 'clear section' button does not work. Keep this.

  // Handle propagation between checkbox nodes.
  const handleSelect = (value: boolean) => {
      if (selectParent && !parentValue && !selected) {
          selectParent();
      }
      setSelected(value);
      onSelect();
  }

  const handleClick = () => {
      handleSelect(!selected);
      setClicked(!clicked);
  };

  // Rename with capitals bc React.
  const DisplayComponent = display;

  // Give props to children.
  const childrenWithProps = React.Children.map(children, (child: React.ReactElement) => (
      React.cloneElement(child, {
          parentValue: selected,
          parentClicked: clicked,
          selectParent: () => handleSelect(true),
      })
  ));

  return (
    <>
      <div className={`${className} ${(selected) ? "selected" : ""}`}>
        <DisplayComponent
          selected={selected}
          onClick={handleClick}
          {...props}
        />
      </div>
      {children &&
        <div className="children">
          {childrenWithProps}
        </div>
      }
    </>
  );
}

export default Checkbox;
