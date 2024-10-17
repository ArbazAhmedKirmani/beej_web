export interface IFooterLinksList {
  linkList: { id: number; name: string; link: string }[];
  heading: string;
}

const FooterLinksList = (props: IFooterLinksList) => {
  const { linkList, heading } = props;

  return (
    <div className="link-list">
      <h5>
        <strong>{heading}</strong>
      </h5>
      <ul className="list-group list-group-flush">
        {linkList?.map((link) => (
          <li key={link?.id} className="list-group-item">
            {link?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksList;
