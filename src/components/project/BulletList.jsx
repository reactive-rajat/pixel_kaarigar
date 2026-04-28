import React from "react";

export const BulletList = ({ id, items = [], columns = 1, icon, iconColor }) => {
  const isMultiColumn = columns > 1;

  const renderList = (listItems) => (
    <ul className="card-1 card-sm border flex flex-col !gap-4 !pl-4">
      {listItems.map((item, index) => (
        <li key={index} className="flex gap-3 items-start">
          {icon ? (
            <span className={`material-symbols-outlined shrink-0 mt-0.5 ${iconColor || 'text-primary'}`} style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              {icon}
            </span>
          ) : (
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
          )}
          <div className="text-(--color-text) leading-relaxed" dangerouslySetInnerHTML={{ __html: item }}></div>
        </li>
      ))}
    </ul>
  );

  if (isMultiColumn) {
    const half = Math.ceil(items.length / columns);
    const columnsArray = Array.from({ length: columns }, (_, i) =>
      items.slice(i * half, i * half + half)
    );

    return (
      <div id={id} className={`body text-muted grid grid-cols-1 md:grid-cols-${columns} gap-8 mt-3 mx-auto text-left w-full`}>
        {columnsArray.map((colItems, i) => (
          <React.Fragment key={i}>
            {renderList(colItems)}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div id={id} className="body text-muted mt-3 mx-auto text-left w-full">
      {renderList(items)}
    </div>
  );
};
