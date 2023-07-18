//Components
import ItemSingle from "../itemSingle/ItemSingle";

//Styles
import "./itemList.scss";

const ItemList = ({ data, onDeleteItem, onChangeName }) => {
  if (data.length > 0) {
    return (
      <>
        {data.map((item) => {
          const { id, ...itemProps } = item;

          return (
            <ItemSingle
              key={id}
              {...itemProps}
              onDeleteItem={(e) => onDeleteItem(id, e.target.closest(".item"))}
              onChangeName={(e) => onChangeName(id, e.currentTarget.value)}
            />
          );
        })}
      </>
    );
  } else {
    return <h1 className="empty">List is empty...</h1>;
  }
};

export default ItemList;
