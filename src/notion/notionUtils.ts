const NOTION_URL_PREFIX = 'www.notion.so';

export const getTitle = (page:any) => {
  // notion api sometimes splits out the title into
  // multiple objects, map into single string separated by ' '
  return page.properties.Name.title.map((t:any) => {
    return t.plain_text;
  }).join(' ');
};

export function getRichText(page:any, property:any): string {
  return page.properties[property].rich_text.map((t:any) => {
    return t.plain_text;
  }).join(' ');
}

export const getCategory = (page:any) => {
  return page.properties.Category.multi_select.map((p:any) => {
    return p.name;
  }).join(' & ');
};

export const getURL = (page:any) => {
  return page.url;
};

export const getPublicURL = (page:any, publicUrlPrefix:any) => {
  return page.url.replace(NOTION_URL_PREFIX, publicUrlPrefix);
};

export const getStatus = (page:any) => {
  return page.properties.Status.select.name;
};

export const getPropertyURL = (page:any, property:any) => {
  return (page.properties[property]) ? page.properties[property].url : '';
};
