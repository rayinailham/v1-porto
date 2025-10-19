'use client'

export function SkillsTable() {
  return (
    <div className="text-white text-sm">
      <table className="w-full border-collapse">
        <tbody>
          {/* Skills Row */}
          <tr className="border-b border-gray-700">
            <td className="py-3 pr-4 font-medium text-gray-400 align-top w-20">
              Skills
            </td>
            <td className="py-3 text-gray-300 leading-relaxed">
              <span className="line-clamp-2">
                Web Dev, System Design, Clipping, Leadership etc.
              </span>
            </td>
          </tr>
          
          {/* Tools Row */}
          <tr className="border-b border-gray-700">
            <td className="py-3 pr-4 font-medium text-gray-400 align-top w-20">
              Tools
            </td>
            <td className="py-3 text-gray-300 leading-relaxed">
              <span className="line-clamp-2">
                VS Code, Premiere Pro, Figma, Next.js, Express.js etc.
              </span>
            </td>
          </tr>
          
          {/* Things I Like Row */}
          <tr className="border-b border-gray-700">
            <td className="py-3 pr-4 font-medium text-gray-400 align-top w-20">
              I Like
            </td>
            <td className="py-3 text-gray-300 leading-relaxed">
              <span className="line-clamp-2">
                Hoshimachi Suisei, Microservice, Clean design etc.
              </span>
            </td>
          </tr>
          
          {/* Quotes Row */}
          <tr>
            <td className="py-3 pr-4 font-medium text-gray-400 align-top w-20">
              Quote
            </td>
            <td className="py-3 text-gray-300 italic leading-relaxed">
              <span className="line-clamp-2">
                "The wound is the place where the Light enters you." - Rumi
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
