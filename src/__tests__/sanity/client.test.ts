jest.mock('@sanity/client', () => {
  const config = {
    projectId: 'dgvaewm2',
    dataset: 'production',
    apiVersion: '2026-04-01',
    useCdn: true,
  }
  return {
    createClient: jest.fn(() => ({
      config: () => config,
      fetch: jest.fn(),
    })),
  }
})

jest.mock('@sanity/image-url', () => {
  const mockImage = jest.fn()
  return {
    __esModule: true,
    default: jest.fn(() => ({
      image: mockImage,
    })),
  }
})

import { sanityClient, urlFor } from '@/lib/sanity/client'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

describe('Sanity Client', () => {
  it('cria client com createClient', () => {
    expect(createClient).toHaveBeenCalledWith(
      expect.objectContaining({
        projectId: 'dgvaewm2',
        dataset: 'production',
        useCdn: true,
      })
    )
  })

  it('client tem projectId correto', () => {
    expect(sanityClient.config().projectId).toBe('dgvaewm2')
  })

  it('client tem dataset production', () => {
    expect(sanityClient.config().dataset).toBe('production')
  })

  it('client usa CDN para leitura', () => {
    expect(sanityClient.config().useCdn).toBe(true)
  })

  it('urlFor chama image builder com a referencia', () => {
    const imageRef = {
      _type: 'image' as const,
      asset: {
        _ref: 'image-abc123-800x600-png',
        _type: 'reference' as const,
      },
    }
    urlFor(imageRef)

    const builderInstance = (imageUrlBuilder as jest.Mock).mock.results[0].value
    expect(builderInstance.image).toHaveBeenCalledWith(imageRef)
  })
})
