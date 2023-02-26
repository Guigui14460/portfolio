/**
 * Defines a component to add basic
 * meta tags for page.
 * 
 * @module components.meta.basic-tags
 */

import { pathToUrl } from "@/utils/routes"
import Head from "next/head"
import { FC } from "react"

/**
 * Structure to represent the basic meta tags component properties.
 */
export interface PageMetaTagsProps {
  /**
   * Title of the page.
   */
  title?: string

  /**
   * Description of the page
   */
  description?: string

  /**
   * Path to access the canonical page.
   */
  pagePath: string

  /**
   * Substructure to handle image for social networks.
   */
  image?: {
    /**
     * Path to the image.
     */
    path: string

    /**
     * Width of the image.
     */
    width: number

    /**
     * Height of the image.
     */
    height: number

    /**
     * Alternative text for the image.
     */
    alt: string
  }
}

/**
 * Represents a set of needed meta tags to upgrade SEO,
 * display basic informations and for social networks sharing.
 * 
 * @param {PageMetaTagsProps} param0 component parameters
 * @returns {JSX.Element} component instance
 */
const PageMetaTags: FC<PageMetaTagsProps> = (props) => {
  const { title, description, pagePath, image } = {
    ...props,
    title: props.title ? props.title + " | GL's Portfolio" : "Guillaume Letellier Portfolio",
    description: props.description || "Portfolio of Guillaume Letellier, a french student at University of Caen Normandy",
    pagePath: pathToUrl(props.pagePath),
    image: {
      ...props.image,
      path: props.image && pathToUrl(props.image.path),
    }
  }
  
  return (
    <Head key="page_meta_tags">
      <title data-testid="site-title">{title}</title>
      <meta data-testid="meta-title" name="title" content={title} />
      <meta data-testid="meta-description" name="description" content={description} />
      <link data-testid="link-canonical" rel="canonical" href={pagePath} />

      {/* Open Graph / Facebook */}
      {/* <meta data-testid="meta-og-sitename" property="og:site_name" content="Guillaume Letellier's Portfolio" />
      <meta data-testid="meta-og-type" property="og:type" content="website" />
      <meta data-testid="meta-og-url" property="og:url" content={pagePath} />
      <meta data-testid="meta-og-title" property="og:title" content={title} />
      <meta data-testid="meta-og-description" property="og:description" content={description} />
      {
        props.image && <>
          <meta data-testid="meta-og-image" property="og:image" content={image.path} />
          <meta data-testid="meta-og-image-width" property="og:image:width" content={`${image.width}`} />
          <meta data-testid="meta-og-image-height" property="og:image:height" content={`${image.height}`} />
          <meta data-testid="meta-og-image-alt" property="og:image:alt" content={image.alt} />
        </>
      } */}

      {/* Twitter */}
      {/* <meta name="twitter:site" content="@khollector" /> */}
      {/* <meta data-testid="meta-twitter-card" name="twitter:card" content={`summary${props.image ? "_large_image" : ""}`} />
      <meta data-testid="meta-twitter-url" name="twitter:url" content={pagePath} />
      <meta data-testid="meta-twitter-title" name="twitter:title" content={title} />
      <meta data-testid="meta-twitter-description" name="twitter:description" content={description} />
      {
        props.image && <>
          <meta data-testid="meta-twitter-image" name="twitter:image" content={image.path} />
        </>
      } */}
    </Head>
  )
}
PageMetaTags.displayName = "PageMetaTags"

export default PageMetaTags
